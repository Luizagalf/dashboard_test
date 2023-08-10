import { render, screen, fireEvent } from "@testing-library/react";
import Header from "components/Header";
import { BrowserRouter } from "react-router-dom";

describe("Header Component", () => {
  it("renders with correct title and button title", () => {
    const title = "Список элементов";
    const buttonTitle = "Вернуться назад";
    const to = "/";

    render(
      <BrowserRouter>
        <Header title={title} buttonTitle={buttonTitle} to={to} />
      </BrowserRouter>
    );

    const titleElement = screen.getByText(title);
    const buttonElement = screen.getByText(buttonTitle);

    expect(titleElement).toBeInTheDocument();
    expect(buttonElement).toBeInTheDocument();
  });

  it("renders Title and Button components", () => {
    const title = "Список элементов";
    const buttonTitle = "Вернуться назад";
    const to = "/";

    render(
      <BrowserRouter>
        <Header title={title} buttonTitle={buttonTitle} to={to} />{" "}
      </BrowserRouter>
    );

    const titleComponent = screen.getByTestId("title-component");
    const buttonComponent = screen.getByTestId("button-component");

    expect(titleComponent).toBeInTheDocument();
    expect(buttonComponent).toBeInTheDocument();
  });

  it("passes the correct props to Button component", () => {
    const title = "Список элементов";
    const buttonTitle = "Вернуться назад";
    const to = "/";

    render(
      <BrowserRouter>
        <Header title={title} buttonTitle={buttonTitle} to={to} />{" "}
      </BrowserRouter>
    );
    const buttonComponent = screen.getByTestId("button-component");

    fireEvent.click(buttonComponent);
    expect(window.location.pathname).toBe(to);
  });
});
