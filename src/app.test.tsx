import React from "react";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter, BrowserRouter } from "react-router-dom";
import App from "./App";
import { act } from "react-dom/test-utils";

describe("App", () => {
  it("renders the DashboardPage on the home route", async () => {
    render(<App />);

    await waitFor(() => {
      const dashboardPage = screen.getByText("Dashboard");
      expect(dashboardPage).toBeInTheDocument();
    });
  });

  it("renders the ListPage on the /list route", async () => {
    render(<App />);

    const button = screen.getByText("Перейти в список");
    fireEvent.click(button);

    await waitFor(() => {
      const listPage = screen.getByText("Список элементов");
      expect(listPage).toBeInTheDocument();
    });
  });
});
