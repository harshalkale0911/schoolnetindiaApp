// src/components/Auth/Login.jsx

import { useAuth0 } from '@auth0/auth0-react';
import { Button } from 'antd';

const Login = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <Button type="primary" onClick={() => loginWithRedirect()}>
      Log In
    </Button>
  );
};

export default Login;
