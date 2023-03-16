import { Navigate, Outlet } from "react-router-dom"

const ProtectedRouteElement = ({ loggedIn, children }) => {
  return (
    loggedIn ? (children ? children: <Outlet />) : <Navigate to="/" replace/>
)}

export default ProtectedRouteElement; 