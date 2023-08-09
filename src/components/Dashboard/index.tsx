import React from "react";
import { Link } from "react-router-dom";

interface DashboardProps {
  favoriteItemsCount: number;
  totalFileSize: number;
}

const Dashboard: React.FC<DashboardProps> = ({
  favoriteItemsCount,
  totalFileSize
}) => {
  return (
    <div>
      <h1>Dashboard Page</h1>
      <p>Favorite Items: {favoriteItemsCount}</p>
      <p>Total File Size: {totalFileSize} MB</p>
      <Link to="/list">Go to List</Link>
    </div>
  );
};

export default Dashboard;
