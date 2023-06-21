import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom"
import Hero from "./Hero";

describe("Hero", () => {
  test("should hero component with correct text", () => {
    render(<Hero />);

    const titleElement = screen.getByText(/TRADIÇÃO COM MODERNIDADE/i);
    const descriptionElement = screen.getByText(
      /Nosso compromisso é preservar o sabor autêntico dos clássicos da panificação, ao mesmo tempo em que introduzimos toques modernos/i
    );
    const buttonElement = screen.getByText(/PRODUTOS/i);

    expect(titleElement).toBeInTheDocument();
    expect(descriptionElement).toBeInTheDocument();
    expect(buttonElement).toBeInTheDocument();
  });
});
