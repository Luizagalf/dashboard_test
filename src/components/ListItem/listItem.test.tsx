import { render, screen, fireEvent } from "@testing-library/react";
import ListItem from "components/ListItem";
import { listItemTest } from "utils/testData";

describe("ListItem Component", () => {
  it("renders the item correctly", () => {
    render(<ListItem item={listItemTest} />);

    const titleElement = screen.getByText(listItemTest.title);

    expect(titleElement).toBeInTheDocument();
  });

  it("renders 'Добавить в избранное' button when toggleFavorite is provided", () => {
    const mockToggleFavorite = jest.fn();
    render(
      <ListItem item={listItemTest} toggleFavorite={mockToggleFavorite} />
    );

    const addButton = screen.getByText("Добавить в избранное");

    expect(addButton).toBeInTheDocument();
  });

  it("renders 'Удалить из избранного' button when item is favorite", () => {
    const mockFavoriteItem = { ...listItemTest, isFavorite: true };
    const mockToggleFavorite = jest.fn();
    render(
      <ListItem item={mockFavoriteItem} toggleFavorite={mockToggleFavorite} />
    );

    const removeButton = screen.getByText("Удалить из избранного");

    expect(removeButton).toBeInTheDocument();
  });

  it("calls toggleFavorite when 'Добавить в избранное' button is clicked", () => {
    const mockToggleFavorite = jest.fn();
    render(
      <ListItem item={listItemTest} toggleFavorite={mockToggleFavorite} />
    );

    const addButton = screen.getByText("Добавить в избранное");
    fireEvent.click(addButton);

    expect(mockToggleFavorite).toHaveBeenCalledWith(listItemTest.id);
  });

  it("calls toggleFavorite when 'Удалить из избранного' button is clicked", () => {
    const mockFavoriteItem = { ...listItemTest, isFavorite: true };
    const mockToggleFavorite = jest.fn();
    render(
      <ListItem item={mockFavoriteItem} toggleFavorite={mockToggleFavorite} />
    );

    const removeButton = screen.getByText("Удалить из избранного");
    fireEvent.click(removeButton);

    expect(mockToggleFavorite).toHaveBeenCalledWith(listItemTest.id);
  });
});
