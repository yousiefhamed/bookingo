import React from "react";
import "../styles/logout.css";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../context/AppContext";

const User = () => {
  const navigate = useNavigate();
  const { setLoggedIn } = useAppContext();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    setLoggedIn(false);
    navigate("/");
  };

  return (
    <div className="user-container">
      <h2>User Profile</h2>
      <button className="logout-button" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};

export default User;
