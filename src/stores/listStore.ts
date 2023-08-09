import { observable, action, makeAutoObservable } from "mobx";
import { RootStore } from "./rootStore";
import { fetchListItems } from "../services/api";
import { IListItems } from "interfaces/ListItems";

class ListStore {
  rootStore: RootStore;

  @observable listItems: IListItems = {};
  @observable isLoading: boolean = false;
  @observable page: number = 1;
  @observable limit: number = 20;

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
    makeAutoObservable(this);
  }

  @action
  updateListItems(newItems: IListItems) {
    this.listItems = newItems;
  }

  @action
  setIsLoading(value: boolean) {
    this.isLoading = value;
  }

  @action loadListItems = async () => {
    try {
      if (this.isLoading) return;
      this.setIsLoading(true);
      const newItems: IListItems = await fetchListItems(this.page, this.limit);
      this.updateListItems({ ...this.listItems, ...newItems });
      this.page += 1;
      this.setIsLoading(false);
    } catch (error) {
      console.error("Error loading list items:", error);
      this.setIsLoading(false);
    }
  };

  @action toggleFavorite = (itemId: number) => {
    const newListItems = { ...this.listItems };
    newListItems[itemId] = {
      ...this.listItems[itemId],
      isFavorite: !this.listItems[itemId].isFavorite
    };
    this.updateListItems(newListItems);

    if (newListItems[itemId].isFavorite) {
      this.rootStore.dashboardStore.addNewFavoriteItem(itemId);
    } else this.rootStore.dashboardStore.removeNewFavoriteItem(itemId);
  };
}

export { ListStore };
