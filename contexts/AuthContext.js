import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
import jwtDecode from "jwt-decode";

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  axios.defaults.baseURL = "http://localhost:3030/auth";

  const [isLoading, setLoading] = useState(true);

  const [user, setUser] = useState({
    connected: false,
    details: {}
  });

  function login(body) {
    return axios
      .post("sign-in", body)
      .then(res => {
        setUser({
          connected: true,
          details: {
            username: "toto",
            email: "toto"
          }
        });
        setAuthorizationToken(res.data.token);
        return { type: "success", message: res.data.message };
      })
      .catch(err => {
        return { type: "error", message: err.response.data };
      });
  }

  function logout() {
    setUser({
      connected: false,
      details: {}
    });
    localStorage.removeItem("token");
  }

  useEffect(() => {
    const fetchUser = async () => {
      let token = localStorage.getItem("token");
      if (!token) {
        setLoading(false);
        return;
      }

      const decodedToken = jwtDecode(token);
      if (decodedToken.exp * 1000 < Date.now()) logout();
      else {
        setUser({
          connected: true,
          details: {
            prenom: "SylvainReconnect",
            email: "Test"
          }
        });
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  const value = {
    user,
    login,
    logout,
    connected: user.connected,
    isLoading
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

const setAuthorizationToken = token => {
  localStorage.setItem("token", `Bearer ${token}`);
  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
};
