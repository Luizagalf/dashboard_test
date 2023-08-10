import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Button from "components/Button";

describe("Button Component", () => {
  it("renders with the correct title", () => {
    const title = "Click me";
    render(
      <BrowserRouter>
        <Button title={title} to="/" />
      </BrowserRouter>
    );
    const button = screen.getByText(title);
    expect(button).toBeInTheDocument();
  });

  it("navigates to the specified route when clicked", () => {
    const to = "/list";
    render(
      <BrowserRouter>
        <Button title="Click me" to={to} />
      </BrowserRouter>
    );
    const button = screen.getByText("Click me");
    fireEvent.click(button);
    expect(window.location.pathname).toBe(to);
  });
});
