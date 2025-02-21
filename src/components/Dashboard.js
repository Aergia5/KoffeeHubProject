import React from "react";
import { logoutUser } from "./auth";

const Dashboard = () => {
  const email = localStorage.getItem("loggedInUser");

  if (!email) {
    return <p>Please login first.</p>;
  }

  const handleLogout = () => {
    logoutUser();
    window.location.href = "/";
  };

  return (
    <div>
      <h2>Welcome, {email}!</h2>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Dashboard;
