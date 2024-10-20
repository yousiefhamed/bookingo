import Search from "./Search";
import "./../styles/header.css";
import Cart from "./CartIcon";

const Header = () => {
  return (
    <header className="header">
      <Search />
      <Cart />
    </header>
  );
};

export default Header;
