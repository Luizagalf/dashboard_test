import React, { useEffect } from "react";
import { observer } from "mobx-react-lite";
import ListContainer from "containers/ListContainer";
import { useStores } from "stores/rootStore";
import Header from "components/Header";

const ListPage: React.FC = observer(() => {
  const { listStore } = useStores();

  useEffect(() => {
    listStore.loadListItems();
  }, [listStore]);

  return (
    <div>
      <Header title="Список элементов" buttonTitle="Вернуться назад" to="/" />
      <ListContainer />
    </div>
  );
});

export default ListPage;
