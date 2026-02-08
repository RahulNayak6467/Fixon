import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <header className="flex justify-around items-center py-4 text-text-primary font-sans bg-bg-secondary w-full">
      <span>Logo</span>
      <nav>
        <ul className="flex gap-10 text-md">
          <li>
            <NavLink
              to="/marketoverview"
              className={({ isActive }) =>
                isActive ? "text-purple-end font-bold" : "text-text-primary"
              }
            >
              Market Overview
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                isActive ? "text-purple-end font-bold" : "text-text-primary"
              }
            >
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/search"
              className={({ isActive }) =>
                isActive ? "text-purple-end font-bold" : "text-text-primary"
              }
            >
              Search
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/watchlist"
              className={({ isActive }) =>
                isActive ? "text-purple-end font-bold" : "text-text-primary"
              }
            >
              {" "}
              Watchlist
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className="flex gap-5">
        <button className="px-6 py-0.5 bg-bg-primary rounded-[5px] border border-bg-primary hover:border-[#7C47C6]  cursor-pointer">
          Login
        </button>
        {/* <button>Get Started</button> */}
      </div>
    </header>
  );
}

export default Navbar;
