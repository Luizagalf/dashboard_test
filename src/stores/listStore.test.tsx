import { ListStore } from "./listStore";
import { RootStore } from "./rootStore";
import { fetchListItems } from "services/api";
import { listItemsTest } from "utils/testData";
jest.mock("services/api");

describe("ListStore", () => {
  let rootStore: RootStore;
  let listStore: ListStore;

  beforeEach(() => {
    rootStore = new RootStore();
    listStore = rootStore.listStore;
  });

  it("should load list items successfully", async () => {
    const mockItems = listItemsTest;

    (fetchListItems as jest.Mock).mockResolvedValueOnce(mockItems);

    await listStore.loadListItems();

    expect(listStore.listItems).toEqual(mockItems);
    expect(listStore.isLoading).toBe(false);
    expect(listStore.page).toBe(2);
  });

  it("should handle loading error", async () => {
    const errorMessage = "Some error";
    (fetchListItems as jest.Mock).mockRejectedValueOnce(
      new Error(errorMessage)
    );

    await listStore.loadListItems();

    expect(listStore.isLoading).toBe(false);
  });

  it("should toggle favorite status of an item", () => {
    listStore.listItems = listItemsTest;

    listStore.toggleFavorite(1);

    expect(listStore.listItems[1].isFavorite).toBe(true);

    listStore.toggleFavorite(1);

    expect(listStore.listItems[1].isFavorite).toBe(false);
  });
});
