import { render, screen, fireEvent } from "@testing-library/react";
import ListContainer from "containers/ListContainer";
import { listItemsTest } from "utils/testData";

const mockLoadListItems = jest.fn();
const mockToggleFavorite = jest.fn();

const mockRootStore = {
  listStore: {
    listItems: listItemsTest,
    isLoading: false,
    page: 1,
    limit: 20,
    loadListItems: mockLoadListItems,
    toggleFavorite: mockToggleFavorite
  }
};

jest.mock("stores/rootStore", () => ({
  useStores: () => mockRootStore
}));

describe("ListContainer Component", () => {
  it("renders list items correctly", () => {
    const mockRootStore = {
      listStore: {
        listItems: listItemsTest,
        isLoading: false,
        page: 1,
        limit: 20,
        loadListItems: mockLoadListItems,
        toggleFavorite: mockToggleFavorite
      }
    };
    jest.mock("stores/rootStore", () => ({
      useStores: () => mockRootStore
    }));

    render(<ListContainer />);

    const item1 = screen.getByText("accusamus");
    const item2 = screen.getByText("reprehenderit");

    expect(item1).toBeInTheDocument();
    expect(item2).toBeInTheDocument();
  });

  it("calls loadListItems when scrolled to bottom and page is not exceeding limit", () => {
    render(<ListContainer />);

    const listContainer = screen.getByTestId("list-container");

    Object.defineProperty(listContainer, "scrollHeight", { value: 200 });
    Object.defineProperty(listContainer, "scrollTop", { value: 190 });
    Object.defineProperty(listContainer, "clientHeight", { value: 10 });

    fireEvent.scroll(listContainer);

    expect(mockLoadListItems).toHaveBeenCalled();
  });

  it("does not call loadListItems when scrolled to bottom and page exceeds limit", () => {
    mockRootStore.listStore.page = 6;

    render(<ListContainer />);

    const listContainer = screen.getByTestId("list-container");

    Object.defineProperty(listContainer, "scrollHeight", { value: 200 });
    Object.defineProperty(listContainer, "scrollTop", { value: 190 });
    Object.defineProperty(listContainer, "clientHeight", { value: 10 });

    fireEvent.scroll(listContainer);

    expect(mockLoadListItems).not.toHaveBeenCalled();
  });
});
