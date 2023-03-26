import { Navigate, Outlet } from "react-router-dom"

const RouteRedirect = ({ loggedIn, children }) => {
  return (
    loggedIn ? <Navigate to="/" replace /> : children ? children : <Outlet />
  )
}
export default RouteRedirect;