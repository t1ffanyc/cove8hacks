// Redirect to public pages if the user isnt authenticated
import { Navigate, Outlet, useLocation } from 'react-router';
import { useAuth } from 'context/authContext';
import Loading from '../pages/Loading';


export default function RequireAuth() {
  const { user, isLoading } = useAuth();
  const location = useLocation();

  if (isLoading) {
    return <Loading />;
  }

  return user
    ? <Outlet />
    : <Navigate to="/signin" replace  state={{ from: location.pathname }}/>
}
