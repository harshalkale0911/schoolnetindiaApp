// src/components/Auth/Register.jsx

import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Button } from 'antd';

const Register = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <Button type="primary" onClick={() => loginWithRedirect({ screen_hint: 'signup' })}>
      Register
    </Button>
  );
};

export default Register;
