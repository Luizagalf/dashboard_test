import { observable, action, makeAutoObservable } from "mobx";
import { RootStore } from "./rootStore";
class DashboardStore {
  rootStore: RootStore;

  @observable favoriteItems: number[] = [];
  @observable totalFileSize: number = 0;

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
    makeAutoObservable(this);
  }

  @action calculateTotalFileSize = (isAdded: boolean) => {
    if (isAdded) {
      this.favoriteItems.forEach(
        (item) =>
          (this.totalFileSize += this.rootStore.listStore.listItems[item].size)
      );
    } else {
      this.favoriteItems.forEach(
        (item) =>
          (this.totalFileSize -= this.rootStore.listStore.listItems[item].size)
      );
    }
  };

  @action addNewFavoriteItem = (id: number) => {
    this.favoriteItems.push(id);
    this.calculateTotalFileSize(true);
  };

  @action removeNewFavoriteItem = (id: number) => {
    const newFavoriteItems = this.favoriteItems.filter(
      (number) => number !== id
    );
    this.favoriteItems = newFavoriteItems;
    this.calculateTotalFileSize(false);
  };

  @action updateFavorites = (favorites: number[]) => {
    this.favoriteItems = favorites;
  };
}

export { DashboardStore };
