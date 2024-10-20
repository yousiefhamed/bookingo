import { Navigate } from "react-router-dom";
import { useAppContext } from "../../context/AppContext";

const IsLoggedIn = ({ children }) => {
  const { user, loading, error } = useAppContext();

  if (user && !loading && !error) {
    return <Navigate to="/account" />;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return children;
};

export default IsLoggedIn;
