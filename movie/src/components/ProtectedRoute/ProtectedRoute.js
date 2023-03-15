import { Navigate, useLocation } from "react-router-dom"

const ProtectedRouteElement = ({component: Component, onlyUnAuth, ...props }) => {
  const location = useLocation();
  console.log(location)
  if (props.loggedIn && onlyUnAuth) {
    const { pathname } = location;
    return <Navigate to={pathname} />
  }
  if (!props.loggedIn && onlyUnAuth) {
    return <Navigate to="/" state={{ from: location }} />
  }
  return <Component {...props} />
}

export default ProtectedRouteElement; 