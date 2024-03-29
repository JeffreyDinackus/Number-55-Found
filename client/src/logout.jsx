import { useAuth0 } from "@auth0/auth0-react";
import './App.css';



const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <button className='start-button' onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
      Log Out
    </button>
  );
};

export default LogoutButton;