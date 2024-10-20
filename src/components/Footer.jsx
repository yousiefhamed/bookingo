import "./../styles/footer.css";

import logo from "./../assets/logo.png";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="brand">
        <img src={logo} alt="bookingo logo" />
        <p>Bookingo &copy;All Rights Reserved @2024</p>
      </div>
      <div className="social">
        <Link to="#">
          <FaFacebookF />
        </Link>
        <Link to="#">
          <FaLinkedin />
        </Link>
        <Link to="#">
          <FaInstagram />
        </Link>
        <Link to="#">
          <FaTwitter />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
