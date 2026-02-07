function Navbar() {
  return (
    <header className="flex justify-around items-center py-4 text-text-primary font-sans bg-bg-secondary w-full">
      <span>Logo</span>
      <nav>
        <ul className="flex gap-10 text-md">
          <li>
            <a className="cursor-pointer">Dashboard</a>
          </li>
          <li>
            <a className="cursor-pointer">Search</a>
          </li>
          <li>
            <a className="cursor-pointer">Watchlist</a>
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
