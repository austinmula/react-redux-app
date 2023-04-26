import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "../app/store";
// import App from "../App";
import Home from "../pages/Home";

const mockChildComponent = jest.fn();
jest.mock("../components/Heading", () => (props) => {
  mockChildComponent(props);
  return <mock-childComponent />;
});

test("renders learn react link", () => {
  const { getByText } = render(
    <Provider store={store}>
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    </Provider>
  );
  expect(mockChildComponent).toHaveBeenCalledWith(
    expect.objectContaining({
      title: "Heading",
      text: "This is simple text for testing",
    })
  );
});
