import { useEffect } from "react";

const { useAuth } = require("contexts/AuthContext");
const { useRouter } = require("next/router");

const withoutAuth = (Component) => {
  const Auth = (props) => {

    const {connected} = useAuth();
    const router = useRouter();

    useEffect(() => {
      if(connected) {
        router.push('/');
        return;
      }
    })

    if(!connected) return <Component {...props} />;
  }
  return Auth;
}

export default withoutAuth;