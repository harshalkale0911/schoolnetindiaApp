// src/index.jsx

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import 'antd/dist/reset.css'; // Ant Design CSS
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom';
import AuthWrapper from './components/Auth/AuthWrapper';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <AuthWrapper>
        <App />
      </AuthWrapper>
    </Router>
  </StrictMode>,
);
