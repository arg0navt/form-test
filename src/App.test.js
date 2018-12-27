import React from "react";
import App from "./App";
import LogIn from "./pages/LogIn";
import { render, fireEvent, wait } from "react-testing-library";
import {
  createHistory,
  createMemorySource,
  LocationProvider
} from "@reach/router";
import "jest-dom/extend-expect";

test("testing input email", () => {
  const { container } = render(<LogIn />);
  const emailInput = container.querySelector("input[type=email]");
  fireEvent.change(emailInput, { target: { value: "test.test@test.com" } });
  expect(emailInput.value).toBe("test.test@test.com");
});

test("testing input password", () => {
  const { container } = render(<LogIn />);
  const passwordInput = container.querySelector("input[type=password]");
  fireEvent.change(passwordInput, { target: { value: "123456789" } });
  expect(passwordInput.value).toBe("123456789");
});

test("test send form", async () => {
  const { container } = render(<App />);
  const emailInput = container.querySelector("input[type=password]");
  const passwordInput = container.querySelector("input[type=password]");
  const button = container.querySelector("button");
  fireEvent.change(emailInput, { target: { value: "test.test@test.com" } });
  fireEvent.change(passwordInput, { target: { value: "123456789" } });
  fireEvent.click(button);
  await wait(() => expect(container.querySelector(".wrap-user-list")).toBeTruthy())
})

function renderWithRouter(
  ui,
  { route = "/", history = createHistory(createMemorySource(route)) } = {}
) {
  return {
    ...render(<LocationProvider history={history}>{ui}</LocationProvider>),
    history
  };
}

test("test redirect to LogIn", async () => {
  localStorage.removeItem("token-test")
  const {
    container
  } = renderWithRouter(<App />, { route: "/main" });
  const emailInput = container.querySelector("input[type=email]");
  expect(emailInput).toBeTruthy();
});

test("test redirect to Main", async () => {
  localStorage.setItem("token-test", "blablabla")
  const {
    container,
    history: { navigate }
  } = renderWithRouter(<App />, { route: "/" });
  const emailInput = container.querySelector("input[type=email]");
  expect(emailInput).toBeNull();
  localStorage.removeItem("token-test")
})

test("load users", async () => {
  localStorage.setItem("token-test", "blablabla")
  const {
    container
  } = renderWithRouter(<App />, { route: "/" });
  await wait(() => expect(container.querySelector(".wrap-user-list")).toBeTruthy())
  localStorage.removeItem("token-test")
})