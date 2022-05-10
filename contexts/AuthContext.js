import { createContext, useContext, useState } from "react";
import axios from "axios";
import jwtDecode from "jwt-decode";
import nookies, { setCookie, destroyCookie } from "nookies";
import toast from "react-hot-toast";

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export const getUser = async(ctx) => {
  const token = nookies.get(ctx).token;
  if(!token) return;
  const decodedToken = jwtDecode(token);
  if(decodedToken.exp * 1000 < Date.now()) {
    nookies.destroy(ctx, 'token');
    return;
  }
  return await axios
    .get('http://localhost:3030/auth/reconnect', {
      headers: nookies.get(ctx).token ?  { "Authorization": nookies.get(ctx).token } : null,
    }).then((response) => {
      if(response.data) return response.data ? { connected: true, details: response.data.user } : undefined;
    }).catch(() => {
      return;
    })
    
}

export function AuthProvider({authData, children}) {

  const [user, setUser] = useState(authData || { connected: false, details: {}});

  function authAction(action, body) {
    return axios.post(`http://localhost:3030/auth/${action}`, body)
    .then((res) => {
      setUser({
        connected: true,
        details: res.data.user
      });
      setAuthorizationToken(res.data.token);
      toast.success(res.data.message);
    })
    .catch((err) => {
      return err.response.data;
    })
  }

  function logout() {
    setUser({
      connected: false,
      details: {}
    });
    destroyCookie(null, 'token');
    toast.success("Vous êtes maintenant déconnecté !")
  }

  const value = {
    user,
    authAction,
    logout,
    connected: user.connected,
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}

const setAuthorizationToken = (token) => {
  setCookie(null, 'token', `Bearer ${token}`, {
    maxAge: 30 * 24 * 60 * 60,
    path: '/',
  })
  // axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
}