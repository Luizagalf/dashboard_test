import React from "react";
import ListContainer from "containers/ListContainer";
import Header from "components/Header";

const ListPage: React.FC = () => {
  return (
    <>
      <Header title="Список элементов" buttonTitle="Вернуться назад" to="/" />
      <ListContainer />
    </>
  );
};

export default ListPage;
