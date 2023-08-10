import { render, screen } from "@testing-library/react";
import FavoriteItems from "components/FavoriteItems";
import { listItemsTest, favoriteItemsTest } from "utils/testData";

describe("FavoriteItems Component", () => {
  it("renders list of favorite items correctly", () => {
    render(
      <FavoriteItems
        listItems={listItemsTest}
        favoriteItems={favoriteItemsTest}
        moveItem={() => {}}
      />
    );

    const renderedItems = screen.getAllByTestId("draggableItem");
    expect(renderedItems.length).toBe(2);

    expect(screen.getByText("accusamus")).toBeInTheDocument();
    expect(screen.getByText("reprehenderit")).toBeInTheDocument();
    expect(screen.queryByText("officia")).toBeNull();
  });

  it("does not render anything when favoriteItems is empty", () => {
    const favoriteItems: number[] = [];

    render(
      <FavoriteItems
        listItems={listItemsTest}
        favoriteItems={favoriteItems}
        moveItem={() => {}}
      />
    );

    const listElement = screen.queryByTestId("favoriteItemsList");
    expect(listElement).toBeNull();
  });
});
