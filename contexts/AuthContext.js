import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
import jwtDecode from "jwt-decode";
import nookies, { setCookie, destroyCookie } from "nookies";

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export const getUser = async(ctx) => {
  return await axios
    .get('http://localhost:3030/auth/reconnect', {
      headers: nookies.get(ctx).token ?  { "Authorization": nookies.get(ctx).token } : null,
    }).then((response) => {
      // console.log(response);
      if(response.data) return { connected: true, details: response.data.user }
      else return { connected: false, details: {} };
    }).catch((err) => {
      return {connected: false, details: {} };
    })
    
}

export function AuthProvider({myAuth, children}) {

  const [user, setUser] = useState(myAuth || { connected: false, details: {}});

  function login(body) {
    return axios.post("http://localhost:3030/auth/sign-in", body)
    .then((res) => {
      setUser({
        connected: true,
        details: res.data.user
      });
      setAuthorizationToken(res.data.token);
      return {type: "success", message: res.data.message}
    })
    .catch((err) => {
      // console.log(err);
      return {type: "error", message: err.response.data};
    })
  }

  function logout() {
    setUser({
      connected: false,
      details: {}
    });
    destroyCookie(null, 'token');
  }

  // useEffect(() => {
  //   const fetchUser = async () => {
  //     let token = localStorage.getItem("token");
  //     if(!token) {
  //       setLoading(false);
  //       return;
  //     }

  //     const decodedToken = jwtDecode(token);
  //     if(decodedToken.exp * 1000 < Date.now()) logout();
  //     else {
  //       axios.defaults.headers.common['Authorization'] = token;
  //       await axios.get("auth/reconnect")
  //       .then((res) => {
  //         setUser({
  //           connected: true,
  //           details: res.data.user,
  //         })
  //       }).catch((err) => {
  //         logout();
  //       })
  //       setLoading(false);
  //     }
  //   }

  //   fetchUser();
  // }, []);

  const value = {
    user,
    login,
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