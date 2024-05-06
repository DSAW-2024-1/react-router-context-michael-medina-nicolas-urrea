//Login.jsx
import React, { useState } from 'react';
import { useAuth } from '../AuthProvider';
import { useNavigate } from 'react-router-dom';

export const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { login } = useAuth();
    const [error, setError] = useState(''); // Estado para mostrar errores de inicio de sesión

    const handleLogin = () => {
        if (email === 'admin@admin.com' && password === 'admin') {
            const loggedIn = login();
            if (loggedIn) {
                navigate("/", { replace: true });
            }
        } else {
            setError("Correo o Contraseña Inválida");
            // Limpiar los inputs
            setEmail('');
            setPassword('');
        }
    };

    return (
        <div>
            <h2>LOGIN</h2>
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                type="password"
                placeholder="Contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            {error && <p>{error}</p>}
            <button onClick={handleLogin}>Iniciar sesión</button>
        </div>
    );
};

export default Login;