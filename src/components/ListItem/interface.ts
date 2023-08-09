import { IListItem } from "interfaces/ListItem";

export interface IListItemProps {
  item: IListItem;
  toggleFavorite?: (itemId: number) => void;
}
