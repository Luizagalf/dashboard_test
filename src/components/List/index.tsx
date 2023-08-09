import React from "react";
import ListItem from "components/ListItem";
import { IListItems } from "interfaces/ListItems";

interface ListProps {
  listItems: IListItems;
  isLoading: boolean;
  toggleFavorite: (itemId: number) => void;
}

const List: React.FC<ListProps> = ({
  listItems,
  isLoading,
  toggleFavorite
}) => {
  return (
    <>
      <div>
        {Object.values(listItems).map((item) => (
          <ListItem key={item.id} item={item} toggleFavorite={toggleFavorite} />
        ))}
      </div>
      {isLoading && <p>Loading...</p>}
    </>
  );
};

export default List;
