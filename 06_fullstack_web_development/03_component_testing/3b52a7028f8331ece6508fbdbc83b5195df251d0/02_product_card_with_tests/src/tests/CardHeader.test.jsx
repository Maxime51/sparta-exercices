import React from "react";
import { render, cleanup, screen } from "@testing-library/react";
import CardHeader from "../components/product-card/header";

describe("CardHeader component", () => {
  beforeEach(() => {
    render(<CardHeader />);
  });

  afterEach(() => {
    cleanup();
  });

  test("renders at least an input", () => {
    expect.assertions(1);

    const div = screen.getByRole("textbox");

    expect(div).toBeInTheDocument();
  });
});
