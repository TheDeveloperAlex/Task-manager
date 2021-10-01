import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router';
import { authSelectors } from '../../redux/auth';

const PublicRoute = ({ children, restricted = false, ...props }) => {
  const isLogedIn = useSelector(authSelectors.getIsLoggedIn);
  const shouldRedirect = isLogedIn && restricted;
  return (
    <Route {...props}>{shouldRedirect ? <Redirect to="/" /> : children}</Route>
  );
};

export default PublicRoute;
