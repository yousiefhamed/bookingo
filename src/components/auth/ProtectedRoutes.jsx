import { useNavigate } from "react-router-dom";
import { useAppContext } from "../../context/AppContext";
import LoadingModal from "./../utils/LoadingModal"; // Assuming we'll create this component
import { useEffect } from "react";

const ProtectedRoutes = ({ children }) => {
  const { user, loading, error, setError } = useAppContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user && !loading && !error) {
      navigate("/login");
      return;
    }
  }, [error, loading, navigate, user]);

  if (error) {
    setError(null);
    return <div>Error: {`${error}`}</div>;
  }

  if (user) {
    return <>{children}</>;
  }

  return <LoadingModal />;
};

export default ProtectedRoutes;
