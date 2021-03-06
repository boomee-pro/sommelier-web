const { useAuth } = require("contexts/AuthContext");
const { useRouter } = require("next/router");

const withAuth = (Component) => {
  const Auth = (props) => {

    const {connected, isLoading} = useAuth();
    const router = useRouter();

    if(isLoading) return "Loading...";
    if(!connected) {
      router.push('/sign-in'); 
      return;
    } 
    return <Component {...props} />;
  }

  if (Component.getInitialProps) {
    Auth.getInitialProps = Component.getInitialProps;
  }

  return Auth;
}

export default withAuth;