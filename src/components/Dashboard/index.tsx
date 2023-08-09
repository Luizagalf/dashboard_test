import React from "react";
import { IDashboardProps } from "./interface";
import Header from "components/Header";
import Statistics from "components/Statistics";

const Dashboard: React.FC<IDashboardProps> = ({
  favoriteItemsCount,
  totalFileSize
}) => {
  return (
    <>
      <Header title="Dashboard" buttonTitle="Перейти в список" to="/list" />
      <Statistics
        favoriteItemsCount={favoriteItemsCount}
        totalFileSize={totalFileSize}
      />
    </>
  );
};

export default Dashboard;
