import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";
import NavLinks from "../molecules/NavLinks";
import Logo from "../../views/Logo";
import profilePic from "../../asserts/PNG/profile.png";
import personalImage from  "../../asserts/SVG/WhatsApp Image 2024-09-15 at 7.11.23 PM (1).jpeg"

function Navbar() {
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [imgProfile, setImgProfile] = useState(profilePic);
  const [userName, setUserName] = useState();
  const menuLinks = [
    { to: "/", title: "Home" },
    { to: "/Discover", title: "Discover" },
    { to: "/flights", title: "Flights" },
    { to: "/About", title: "About" },
    { to: "/Contact", title: "Contact" }
  ];

  const handleLogOut = () => {
    localStorage.clear();
    setIsAuthenticated(false);
  };

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    const user = localStorage.getItem("userName");
    setUserName(user);

      if (storedUser) {
          
      setImgProfile( profilePic);
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
  }, [isAuthenticated]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="fixed z-20 w-full top-0 bg-white shadow-md">
      <nav className="flex items-center justify-between h-[68px] mx-auto w-full px-4 lg:w-11/12">
        <div className="logo">
          <Link to="/">
            <Logo />
          </Link>
        </div>

        <ul className="hidden md:flex gap-8 text-lg text-[#333]">
          {menuLinks.map((link, index) => (
            <NavLinks key={index} to={link.to} title={link.title} />
          ))}
          {userName === "Manager" && <NavLinks to="/add" title="Add" />}
        </ul>

        {isAuthenticated ? (
          <div className="hidden md:flex items-center gap-5">
            <div className="profile" style={{backgroundColor: "#c1c8c9", borderRadius: "50%"}}>
              <img
                src={userName === "Manager" ? personalImage : profilePic}
                alt="Profile"
                className="rounded-full w-10 h-10 object-contain cursor-pointer"
                onClick={() => navigate("/profile")}
              />
            </div>
            <Link
              to="/SignIn"
              className="bg-blue-500 shadow-md text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300"
              onClick={handleLogOut}
            >
              Log Out
            </Link>
          </div>
        ) : (
          <div className="hidden md:flex gap-3">
            <Link
              to="/Register"
              className="border shadow-md border-blue-500 text-blue-500 px-4 py-2 rounded hover:bg-blue-600 hover:text-white transition duration-300"
            >
              Register
            </Link>
            <Link
              to="/SignIn"
              className="bg-blue-500 shadow-md text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300"
            >
              Sign In
            </Link>
          </div>
        )}

        <div className="md:hidden flex items-center">
          <button
            className="text-blue-500 hover:text-blue-600 focus:outline-none"
            onClick={toggleMobileMenu}
          >
            <i className="fa-solid fa-bars fa-xl"></i>
          </button>
        </div>

        <div
          className={`${
            isMobileMenuOpen ? "block" : "hidden"
          } md:hidden absolute top-[68px] left-0 w-full bg-white shadow-lg z-10`}
        >
          <ul className="flex flex-col gap-5 text-lg text-[#333] p-5">
            {menuLinks.map((link, index) => (
              <NavLinks key={index} to={link.to} title={link.title} />
            ))}
            {isAuthenticated ? (
              <div className="flex gap-3 items-center">
                <div className="profile">
                  <img
                    src={imgProfile}
                    alt="Profile"
                    className="rounded-full w-10 h-10"
                  />
                </div>
                <Link
                  to="/SignIn"
                  className="bg-blue-500 shadow-md text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300"
                  onClick={handleLogOut}
                >
                  Log Out
                </Link>
              </div>
            ) : (
              <div className="flex gap-3">
                <Link
                  to="/Register"
                  className="border border-blue-500 text-blue-500 px-4 py-2 rounded hover:bg-blue-600 hover:text-white transition duration-300"
                  onClick={toggleMobileMenu}
                >
                  Register
                </Link>
                <Link
                  to="/SignIn"
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300"
                  onClick={toggleMobileMenu}
                >
                  Sign In
                </Link>
              </div>
            )}
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
