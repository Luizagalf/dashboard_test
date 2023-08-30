import { DashboardStore } from "./dashboardStore";
import { RootStore } from "./rootStore";
import { ListStore } from "./listStore";
import { listItemsTest } from "utils/testData";

jest.mock("services/api");

describe("DashboardStore", () => {
  let rootStore: RootStore;
  let dashboardStore: DashboardStore;
  let listStore: ListStore;

  beforeEach(() => {
    rootStore = new RootStore();
    dashboardStore = rootStore.dashboardStore;
    listStore = rootStore.listStore;
  });

  it("should add and remove favorite items", () => {
    listStore.listItems = listItemsTest;

    dashboardStore.addNewFavoriteItem(1);

    expect(dashboardStore.favoriteItems).toContain(1);
    expect(dashboardStore.totalFileSize).toBeGreaterThan(0);

    dashboardStore.removeFavoriteItem(1);

    expect(dashboardStore.favoriteItems).not.toContain(1);
    expect(dashboardStore.totalFileSize).toBe(0);
  });

  it("should update favorites", () => {
    listStore.listItems = listItemsTest;
    dashboardStore.updateFavorites([1, 2, 3]);

    expect(dashboardStore.favoriteItems).toEqual([1, 2, 3]);
  });
});
