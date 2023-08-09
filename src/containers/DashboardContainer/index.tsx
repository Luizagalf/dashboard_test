import React from "react";
import { observer } from "mobx-react-lite";
import { useStores } from "stores/rootStore";
import Dashboard from "components/Dashboard";

const DashboardContainer: React.FC = observer(() => {
  const { favoriteItems, totalFileSize } = useStores().dashboardStore;

  return (
    <Dashboard
      favoriteItemsCount={favoriteItems.length}
      totalFileSize={totalFileSize}
    />
  );
});

export default DashboardContainer;
