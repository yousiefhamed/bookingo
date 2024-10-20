import { useEffect } from "react";
import { Link } from "react-router-dom";
import { FaHome, FaShoppingCart, FaUser } from "react-icons/fa";
import { ImBooks } from "react-icons/im";
import { HiMenuAlt3 } from "react-icons/hi";
import logo from "./../assets/logo.png";
import "./../styles/nav.css";

function Nav() {
  const handleMenuClick = () => {
    const menu = document.querySelector(".nav-links");
    menu.classList.toggle("active");
  };

  useEffect(() => {
    return () => {};
  }, []);

  return (
    <nav className="navbar">
      <div className="logo-container">
        <Link to="/">
          <img src={logo} alt="Logo" className="logo" />
        </Link>
      </div>
      <div className="menu-button">
        <button onClick={handleMenuClick}>
          <HiMenuAlt3 />
        </button>
      </div>
      <ul className="nav-links">
        <li>
          <Link to="/">
            <FaHome />
          </Link>
        </li>
        <li>
          <Link to="/books">
            <ImBooks />
          </Link>
        </li>
        <li>
          <Link to="/cart">
            <FaShoppingCart />
          </Link>
        </li>
        <li>
          <Link to="/account">
            <FaUser />
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
