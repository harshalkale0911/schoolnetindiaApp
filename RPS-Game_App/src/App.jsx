// src/App.jsx

import { Route, Routes } from 'react-router-dom';
import Game from './components/Game';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import ProtectedRoute from './components/Auth/ProtectedRoute';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Game />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route
        path="/protected"
        element={<ProtectedRoute component={Game} />}
      />
    </Routes>
  );
};

export default App;
