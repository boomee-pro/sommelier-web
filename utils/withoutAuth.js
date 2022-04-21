import { useEffect } from "react";

const { useAuth } = require("contexts/AuthContext");
const { useRouter } = require("next/router");

const withoutAuth = (Component) => {
  const Check = (props) => {

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
  return Check;
}

export default withoutAuth;