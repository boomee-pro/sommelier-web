const { useAuth } = require("contexts/AuthContext");
const { useRouter } = require("next/router");

const withoutAuth = (Component) => {
  const WAuth = (props) => {

    const {connected, isLoading} = useAuth();
    const router = useRouter();

    if(isLoading) return "Loading...";
    if(connected) {
      router.push('/'); 
      return;
    } 
    return <Component {...props} />;
  }
  return WAuth;
}

export default withoutAuth;