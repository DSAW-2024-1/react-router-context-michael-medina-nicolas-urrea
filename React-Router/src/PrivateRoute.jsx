//PrivateRoute.jsx
import { Navigate } from 'react-router-dom';
import { useAuth } from './AuthProvider';

const PrivateRoute = ({ children }) => {
    const { isLoggedIn } = useAuth();
    if ( isLoggedIn ) {
        return children;
    } else {
        return <Navigate to="/login" replace />;
    }
};

export default PrivateRoute;