import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
function Layout() {
  return (
    <div className="min-h-screen overflow-x-hidden mb-6">
      <Navbar />
      <Outlet />
    </div>
  );
}

export default Layout;
