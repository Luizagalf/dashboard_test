import React from "react";
import { IListItem } from "interfaces/ListItem";

interface ListItemProps {
  item: IListItem;
  toggleFavorite?: (itemId: number) => void;
}

const ListItem: React.FC<ListItemProps> = ({ item, toggleFavorite }) => {
  return (
    <div>
      <img src={item.thumbnailUrl} alt={item.title} />
      <p>{item.title}</p>
      {toggleFavorite && (
        <button onClick={() => toggleFavorite(item.id)}>
          {item.isFavorite ? "Remove from Favorites" : "Add to Favorites"}
        </button>
      )}
    </div>
  );
};

export default ListItem;
