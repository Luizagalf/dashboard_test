import React from "react";
import { observer } from "mobx-react-lite";
import { useStores } from "stores/rootStore";
import FavoriteItems from "components/FavoriteItems";

const FavoriteItemsContainer: React.FC = observer(() => {
  const { favoriteItems, updateFavorites } = useStores().dashboardStore;
  const { listItems } = useStores().listStore;

  const moveItem = (dragIndex: number, hoverIndex: number) => {
    const newNumbers = [...favoriteItems];
    const [draggedNumber] = newNumbers.splice(dragIndex, 1);
    newNumbers.splice(hoverIndex, 0, draggedNumber);
    updateFavorites(newNumbers);
  };

  return (
    <FavoriteItems
      favoriteItems={favoriteItems}
      listItems={listItems}
      moveItem={moveItem}
    />
  );
});

export default FavoriteItemsContainer;
