import { IListItems } from "interfaces/ListItems";
import { DropResult } from "react-beautiful-dnd";

export interface IFavoriteItemsProps {
  listItems: IListItems;
  favoriteItems: number[];
  onDragEnd: (result: DropResult) => void;
}
