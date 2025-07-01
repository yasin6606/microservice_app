// src/App.js
import React, {useState} from 'react';
import {BrowserRouter as Router, Routes, Route, Navigate, NavLink} from 'react-router-dom';
import Login from './Pages/Login';
import Register from './Pages/Register';
import DataDisplay from './Pages/DataDisplay';
import Rabbit from "./Pages/Rabbit";
// import "@tailwindcss"

const App = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(true);

    return (
        <Router>
            <div className="h-screen flex flex-col">
                <nav className="bg-amber-50 flex border-b-2">
                    <NavLink className="py-2 px-5" to="/">Home</NavLink>
                    <NavLink className="py-2 px-5" to="/login">Login</NavLink>
                    <NavLink className="py-2 px-5" to="/register">Register</NavLink>
                    <NavLink className="py-2 px-5" to="/data">Data</NavLink>
                    <NavLink className="py-2 px-5" to="/rabbit">Rabbit</NavLink>
                </nav>
                <div className="flex-1">
                    <Routes>
                        <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated}/>}/>
                        <Route path="/register" element={<Register/>}/>
                        <Route path="/data" element={isAuthenticated ? <DataDisplay/> : <Navigate to="/login"/>}/>
                        <Route path="/rabbit" element={<Rabbit/>}/>
                        <Route path="/" element={<Navigate to="/login"/>}/>
                    </Routes>
                </div>
            </div>
        </Router>
    );
};

export default App;
