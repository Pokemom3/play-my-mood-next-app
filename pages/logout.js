import { useAuth0 } from "@auth0/auth0-react";

const LogoutButton = () => {
  return <a href="/api/auth/logout">Logout</a>;
};

export default LogoutButton;
