import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
import jwtDecode from "jwt-decode";

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {

  axios.defaults.baseURL = "http://localhost:3000/";

  const [isLoading, setLoading] = useState(true);

  const [user, setUser] = useState({
    connected: false,
    details: {}
  });

  function login(body) {
    return axios.post("auth/sign-in", body)
    .then((res) => {
      setUser({
        connected: true,
        details: res.data.user
      });
      setAuthorizationToken(res.data.token);
      return {type: "success", message: res.data.message}
    })
    .catch((err) => {
      return {type: "error", message: err.response.data};
    })
  }

  function logout() {
    setUser({
      connected: false,
      details: {}
    });
    localStorage.removeItem('token');
  }

  useEffect(() => {
    const fetchUser = async () => {
      let token = localStorage.getItem("token");
      if(!token) {
        setLoading(false);
        return;
      }

      const decodedToken = jwtDecode(token);
      if(decodedToken.exp * 1000 < Date.now()) logout();
      else {
        axios.defaults.headers.common['Authorization'] = token;
        await axios.get("auth/reconnect")
        .then((res) => {
          setUser({
            connected: true,
            details: res.data.user,
          })
        }).catch((err) => {
          logout();
        })
        setLoading(false);
      }
    }

    fetchUser();
  }, []);

  const value = {
    user,
    login,
    logout,
    connected: user.connected,
    isLoading
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}

const setAuthorizationToken = (token) => {
  localStorage.setItem('token', `Bearer ${token}`);
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
}