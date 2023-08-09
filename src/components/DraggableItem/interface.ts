import { IListItem } from "interfaces/ListItem";

export interface IDraggableItemProps {
  item: IListItem;
  index: number;
  moveItem: (dragIndex: number, hoverIndex: number) => void;
}
