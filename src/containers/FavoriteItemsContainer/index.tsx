import React from "react";
import { observer } from "mobx-react-lite";
import { useStores } from "stores/rootStore";
import FavoriteItems from "components/FavoriteItems";

const FavoriteItemsContainer: React.FC = observer(() => {
  const { favoriteItems, updateFavorites } = useStores().dashboardStore;
  const { listItems } = useStores().listStore;

  const handleDragEnd = (result: any) => {
    if (!result.destination) return;

    const updatedItems = Array.from(favoriteItems);
    const [reorderedItem] = updatedItems.splice(result.source.index, 1);
    updatedItems.splice(result.destination.index, 0, reorderedItem);

    updateFavorites(updatedItems);
  };

  return (
    <FavoriteItems
      favoriteItems={favoriteItems}
      listItems={listItems}
      onDragEnd={handleDragEnd}
    />
  );
});

export default FavoriteItemsContainer;
