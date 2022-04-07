const { useAuth } = require("contexts/AuthContext");
const { useRouter } = require("next/router");

const withAuth = Component => {
  const Auth = props => {
    const { connected } = useAuth();
    const router = useRouter();

    if (!connected) {
      router.push("/sign-in");
    }

    return <Component {...props} />;
  };
  if (Component.getInitialProps) {
    Auth.getInitialProps = Component.getInitialProps;
  }

  return Auth;
};

export default withAuth;
