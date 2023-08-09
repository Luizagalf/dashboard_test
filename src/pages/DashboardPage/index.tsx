import React from "react";
import { observer } from "mobx-react-lite";
import DashboardContainer from "containers/DashboardContainer";
import FavoriteItemsContainer from "containers/FavoriteItemsContainer";

const DashboardPage: React.FC = observer(() => {
  return (
    <>
      <DashboardContainer />
      <FavoriteItemsContainer />
    </>
  );
});

export default DashboardPage;
