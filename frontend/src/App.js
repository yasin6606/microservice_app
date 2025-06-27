// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import DataDisplay from './DataDisplay';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
      <Router>
        <Routes>
          <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
          <Route path="/register" element={<Register />} />
          <Route path="/data" element={isAuthenticated ? <DataDisplay /> : <Navigate to="/login" />} />
          <Route path="/" element={<Navigate to="/login" />} />
        </Routes>
      </Router>
  );
};

export default App;
