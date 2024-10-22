import React from "react";
import "./../../styles/loading-modal.css"; // We'll create this CSS file for styling

const LoadingModal = () => {
  return (
    <div className="loading-modal">
      <div className="loading-spinner"></div>
      <p>Loading...</p>
    </div>
  );
};

export default LoadingModal;
