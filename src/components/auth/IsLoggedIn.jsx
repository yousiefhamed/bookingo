import { useNavigate } from "react-router-dom";
import { useAppContext } from "../../context/AppContext";
import LoadingModal from "../utils/LoadingModal";
import { useEffect } from "react";

const IsLoggedIn = ({ children }) => {
  const { user, loading, error } = useAppContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (user && !loading && !error) {
      navigate("/account");
    }
  }, [error, loading, navigate, user]);

  if (error) {
    return <div>Error: {`${error}`}</div>;
  }

  if (!user) {
    return <>{children}</>;
  }

  return <LoadingModal />;
};

export default IsLoggedIn;
