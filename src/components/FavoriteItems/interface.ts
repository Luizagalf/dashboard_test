import { IListItems } from "interfaces/ListItems";

export interface IFavoriteItemsProps {
  listItems: IListItems;
  favoriteItems: number[];
  moveItem: (dragIndex: number, hoverIndex: number) => void;
}
