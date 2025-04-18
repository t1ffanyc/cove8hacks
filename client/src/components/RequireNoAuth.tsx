/* Redirect users who land on public pages when they are already authenticated */
import { Outlet, Navigate, useLocation } from 'react-router';
import { useAuth } from 'context/authContext';
import Loading from '../pages/Loading';

export default function RequireNoAuth() {
  const { user, isLoading } = useAuth();
  const location = useLocation();

  if (isLoading) {
    return <Loading/>;
  }
  // if user exists (auth alrdy), redirect home
  return user
    ? <Navigate to={ (location.state as any)?.from ?? '/' } replace />
    : <Outlet />;
}
