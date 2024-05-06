//AppRouter.jsx
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from '../AuthProvider';
import PrivateRoute from '../PrivateRoute';
import Login from '../pages/Login';
import Home from '../pages/Home';
import Overview from '../pages/Overview';
import Contact from '../pages/Contact';

const AppRouter = () => {
    return (
        <BrowserRouter>
            <AuthProvider>
                <Routes>
                    <Route path="/" element={<PrivateRoute><Home /></PrivateRoute>} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/overview" element={<PrivateRoute><Overview /></PrivateRoute>} />
                    <Route path="/contact" element={<PrivateRoute><Contact /></PrivateRoute>} />
                </Routes>
            </AuthProvider>
        </BrowserRouter>
    );
};

export default AppRouter;