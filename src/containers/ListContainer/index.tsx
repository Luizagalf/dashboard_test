import React, { useEffect, useRef } from "react";
import { observer } from "mobx-react-lite";
import { useStores } from "stores/rootStore";
import List from "components/List";

const ListContainer: React.FC = () => {
  const { listItems, isLoading, loadListItems, toggleFavorite, page } =
    useStores().listStore;

  const listRef = useRef<HTMLDivElement | null>(null);

  const handleScroll = () => {
    console.log(listRef);
    if (isLoading || !listRef.current) return;

    const listElement = listRef.current;
    const isScrolledToBottom =
      listElement.scrollTop + listElement.clientHeight >=
      listElement.scrollHeight - 10;

    if (isScrolledToBottom && page <= 5) {
      loadListItems();
    }
  };

  useEffect(() => {
    if (listRef.current) {
      listRef.current.addEventListener("scroll", handleScroll);
      return () => {
        listRef.current?.removeEventListener("scroll", handleScroll);
      };
    }
  }, [isLoading, loadListItems]);

  return (
    <List
      listItems={listItems}
      isLoading={isLoading}
      toggleFavorite={toggleFavorite}
      forwardedRef={listRef}
    />
  );
};

export default observer(ListContainer);
