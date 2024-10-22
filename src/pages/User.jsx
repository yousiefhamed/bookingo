import React, { useEffect, useState } from "react";
import { useAppContext } from "../context/AppContext";
import { logout } from "../hooks/useApi";
import { useNavigate } from "react-router-dom";

import "../styles/logout.css";

const User = () => {
  const navigate = useNavigate();
  const { setLoggedIn, setError } = useAppContext();
  const [logoutStat, setLogoutStat] = useState(false);

  useEffect(() => {
    const handleLogout = async () => {
      try {
        const response = await logout();
        if (response) {
          setLoggedIn(false);
          navigate("/");
        }
      } catch (error) {
        setError(error);
      }
    };

    if (logoutStat) {
      handleLogout();
    }
  }, [logoutStat, navigate, setError, setLoggedIn]);

  return (
    <div className="user-container">
      <h2>User Profile</h2>
      <button className="logout-button" onClick={() => setLogoutStat(true)}>
        Logout
      </button>
    </div>
  );
};

export default User;
