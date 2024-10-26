import { useNavigate } from "react-router-dom";
import { useAppContext } from "../../context/AppContext";
import LoadingModal from "../utils/LoadingModal";
import { useEffect } from "react";
import { useErrorContext } from "../../context/ErrorContext";

const IsLoggedIn = ({ children }) => {
  const { user, loading, error } = useAppContext();
  const navigate = useNavigate();
  const { setMessages } = useErrorContext();

  useEffect(() => {
    if (error) {
      setMessages((prev) => [
        ...prev,
        { message: error, type: "danger", time: Date.now() },
      ]);
    }
  }, [error, navigate, setMessages]);

  useEffect(() => {
    if (user && !loading && !error) {
      navigate("/account");
    }
  }, [error, loading, navigate, user]);

  if (!user) {
    return <>{children}</>;
  }

  return <LoadingModal />;
};

export default IsLoggedIn;
