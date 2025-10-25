import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./navbar";
import Sidebar from "./sidebar";

export default function Layout() {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  if (isHomePage) {
    return (
      <div className="min-h-screen bg-background text-foreground">
        <Navbar />
        <Outlet />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Sidebar />
      <div className="transition-all duration-300 ease-in-out md:ml-64"> {/* Responsive offset */}
        <main className="p-4 md:p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
}