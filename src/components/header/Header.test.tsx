import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Header from "./Header";

describe("Header", () => {
  test("should verify if the header appear on the top when the user scroll the page up and disappear when the user scroll the page down", () => {
    render(<Header />);

    // see if header is render in the page
    const headerElement = screen.getByRole("banner");
    expect(headerElement).toBeVisible();

    // simulate scroll down
    window.scrollY = 500;
    fireEvent.scroll(window);

    // test if header is not fixed on top
    expect(headerElement).not.toHaveClass("fixed");

    // simulate scoll up
    window.scrollY = 100;
    fireEvent.scroll(window);

    // see if header is fixed on top
    expect(headerElement).toHaveClass("fixed");

    // simulate window on top
    window.scrollY = 0;
    fireEvent.scroll(window);

    //see if header is not fixed if window is on top page
    expect(headerElement).not.toHaveClass("fixed");
  });
});
