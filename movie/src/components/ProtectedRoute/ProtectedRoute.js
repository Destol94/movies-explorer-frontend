import { Navigate, useLocation } from "react-router-dom"

const ProtectedRouteElement = ({ component: Component, onlyUnAuth, ...props }) => {
  
  const location = useLocation();
  if (props.loggedIn && onlyUnAuth) {
    const { from } = location.state || { from: '/' };
    return <Navigate to={from} replace />
  }
  if (!props.loggedIn && !onlyUnAuth) {
    return <Navigate to="/signin" state={{ from: location }} />
  }
  return <Component {...props} />
}

export default ProtectedRouteElement; 