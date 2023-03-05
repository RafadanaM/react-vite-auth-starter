import NavbarItem from "./NavbarItem";

function Navbar() {
  return (
    <header className="h-20 bg-black text-white">
      {/* can also use Container or other stuff depends on the design */}
      <div className="h-full p-4 flex items-center justify-between">
        <h1>Navbar</h1>
        <nav>
          <NavbarItem to="/login">Login</NavbarItem>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
