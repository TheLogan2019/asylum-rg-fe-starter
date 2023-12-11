import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Button } from 'react-bootstrap';

const LogoutButton = () => {
  const { logout } = useAuth0();
  return (
    <Button
      onClick={() => logout()}
      id="qsLogoutBtn"
      variant="danger"
      classname="login-btn"
    >
      Log Out
    </Button>
  );
};

export default LogoutButton;
