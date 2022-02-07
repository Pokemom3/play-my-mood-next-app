import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  return <a href="/api/auth/login">Login</a>;
};

export default LoginButton;
