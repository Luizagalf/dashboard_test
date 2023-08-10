import { IListItems } from "interfaces/ListItems";

export interface IListProps {
  listItems: IListItems;
  isLoading: boolean;
  isError: boolean;
  toggleFavorite: (itemId: number) => void;
  forwardedRef: React.MutableRefObject<HTMLDivElement | null>;
}
