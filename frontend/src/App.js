// src/App.js
import React, {useState} from 'react';
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import Login from './Pages/Login';
import Register from './Pages/Register';
import DataDisplay from './Pages/DataDisplay';
// import "@tailwindcss"

const App = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(true);

    return (
        <div className="h-screen">
            <Router>
                <Routes>
                    <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated}/>}/>
                    <Route path="/register" element={<Register/>}/>
                    <Route path="/data" element={isAuthenticated ? <DataDisplay/> : <Navigate to="/login"/>}/>
                    <Route path="/" element={<Navigate to="/login"/>}/>
                </Routes>
            </Router>
        </div>
    );
};

export default App;
