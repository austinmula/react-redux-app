import React from "react";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "../app/store";
// import App from "../App";
import Home from "../pages/Home";

test("Displayed heading text", () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    </Provider>
  );
  const text = screen.getByTestId("heading");
  expect(text).toBeInTheDocument();
});
