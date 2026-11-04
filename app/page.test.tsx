import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";

import HomePage from "./page";

test("shows the application name", () => {
  render(<HomePage />);

  expect(
    screen.getByRole("heading", { level: 1, name: "Home Manager" }),
  ).toBeTruthy();
});
