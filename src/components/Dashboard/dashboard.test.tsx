import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Dashboard from "components/Dashboard";

describe("Dashboard Component", () => {
  it("renders Header with correct title and button", () => {
    render(
      <BrowserRouter>
        <Dashboard favoriteItemsCount={0} totalFileSize={0} />
      </BrowserRouter>
    );

    const headerTitle = screen.getByText("Dashboard");
    const button = screen.getByText("Перейти в список");

    expect(headerTitle).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });

  it("renders Statistics with correct props", () => {
    const favoriteItemsCount = 10;
    const totalFileSize = 1024;

    render(
      <BrowserRouter>
        <Dashboard
          favoriteItemsCount={favoriteItemsCount}
          totalFileSize={totalFileSize}
        />
      </BrowserRouter>
    );

    const favoriteItemsCountElement = screen.getByText(
      `Количество элементов в избранном: ${favoriteItemsCount}`
    );
    const totalFileSizeElement = screen.getByText(
      `Вес картинок всех элементов в избранном: ${totalFileSize} MB`
    );

    expect(favoriteItemsCountElement).toBeInTheDocument();
    expect(totalFileSizeElement).toBeInTheDocument();
  });
});
