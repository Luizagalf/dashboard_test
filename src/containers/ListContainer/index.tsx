import React, { useEffect } from "react";
import { observer } from "mobx-react-lite";
import { useStores } from "stores/rootStore";
import List from "components/List";

const ListContainer: React.FC = () => {
  const { listItems, isLoading, loadListItems, toggleFavorite } =
    useStores().listStore;

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (isLoading) return;
    if (
      window.innerHeight + document.documentElement.scrollTop ===
      document.documentElement.offsetHeight
    ) {
      loadListItems();
    }
  };

  return (
    <List
      listItems={listItems}
      isLoading={isLoading}
      toggleFavorite={toggleFavorite}
    />
  );
};

export default observer(ListContainer);
