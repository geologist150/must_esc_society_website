import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../../assets/logo/logo.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Executive", path: "/executive" },
    { name: "Events", path: "/events" },
    { name: "News", path: "/news" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#0B3C6F] shadow-lg">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        <Link to="/" className="flex items-center gap-3">
          <img
            src={logo}
            alt="MUST ESC Logo"
            className="h-12 w-12 rounded-full bg-white p-1"
          />

          <div className="hidden sm:block">
            <h1 className="text-lg font-bold text-white">
              MUST Earth Science Society
            </h1>

            <p className="text-xs text-yellow-400">
              Make Your Bedrock
            </p>
          </div>
        </Link>

        <ul className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <li key={link.name}>
              <NavLink
                to={link.path}
                className="text-white transition hover:text-yellow-400"
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>

        <Link
          to="/login"
          className="hidden rounded-lg bg-yellow-400 px-5 py-2 font-semibold text-[#0B3C6F] transition hover:bg-white lg:block"
        >
          Admin Login
        </Link>

        <button
          className="text-2xl text-white lg:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </nav>

      {isOpen && (
        <div className="bg-[#0B3C6F] lg:hidden">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className="block border-t border-blue-700 px-6 py-4 text-white hover:bg-blue-800"
            >
              {link.name}
            </NavLink>
          ))}

          <Link
            to="/login"
            className="block bg-yellow-400 px-6 py-4 font-semibold text-[#0B3C6F]"
          >
            Admin Login
          </Link>
        </div>
      )}
    </header>
  );
}

export default Navbar;
