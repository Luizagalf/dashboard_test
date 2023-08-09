import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { observer } from "mobx-react-lite";
import ListContainer from "containers/ListContainer";
import { useStores } from "stores/rootStore";

const ListPage: React.FC = observer(() => {
  const { listStore } = useStores();

  useEffect(() => {
    listStore.loadListItems();
  }, [listStore]);

  return (
    <div>
      <h1>List Page</h1>
      <Link to="/">Back to Dashboard</Link>
      <ListContainer />
    </div>
  );
});

export default ListPage;
