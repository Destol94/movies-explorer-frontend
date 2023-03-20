import { Navigate, Outlet, useLocation } from "react-router-dom"

const ProtectedRouteElement = ({ loggedIn, children, setLocation }) => {
  // console.log(window.history.length)
  // const location = useLocation();
  // console.log(location);
  // setLocation(location.pathname);
  return (
    loggedIn ? (children ? children: <Outlet />) : <Navigate to="/" replace/>
)}

export default ProtectedRouteElement; 