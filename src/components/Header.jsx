import { useAppContext } from "../context/AppContext";
import { Link } from "react-router-dom";
import Search from "./Search";
import Cart from "./CartIcon";

import "./../styles/header.css";

const Header = () => {
  const { user } = useAppContext();
  return (
    <header className="header">
      <Search />
      {user ? (
        <Cart />
      ) : (
        <div className="header-links">
          <Link to="/signup" className="signup">
            Signup
          </Link>
          <Link to="/login" className="login">
            Login
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
