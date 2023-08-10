import { makeAutoObservable } from "mobx";
import { RootStore } from "./rootStore";
class DashboardStore {
  rootStore: RootStore;

  favoriteItems: number[] = [];
  totalFileSize: number = 0;

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
    makeAutoObservable(this);
  }

  calculateTotalFileSize = (newFavoriteItems: number[]) => {
    this.totalFileSize = 0;
    newFavoriteItems.forEach(
      (item) =>
        (this.totalFileSize += this.rootStore.listStore.listItems[item].size)
    );
  };

  addNewFavoriteItem = (id: number) => {
    this.favoriteItems.push(id);
    this.calculateTotalFileSize(this.favoriteItems);
  };

  removeFavoriteItem = (id: number) => {
    const newFavoriteItems = this.favoriteItems.filter(
      (number) => number !== id
    );
    this.favoriteItems = newFavoriteItems;
    this.calculateTotalFileSize(newFavoriteItems);
  };

  updateFavorites = (favorites: number[]) => {
    this.favoriteItems = favorites;
  };
}

export { DashboardStore };
