import { render, screen } from "@testing-library/react";
import ListPage from "pages/ListPage";
import { BrowserRouter } from "react-router-dom";

describe("ListPage Component", () => {
  it("renders header and list container", () => {
    render(
      <BrowserRouter>
        <ListPage />
      </BrowserRouter>
    );

    const headerTitle = screen.getByText("Список элементов");
    const backButton = screen.getByText("Вернуться назад");
    const listContainer = screen.getByTestId("list-container");

    expect(headerTitle).toBeInTheDocument();
    expect(backButton).toBeInTheDocument();
    expect(listContainer).toBeInTheDocument();
  });
});
