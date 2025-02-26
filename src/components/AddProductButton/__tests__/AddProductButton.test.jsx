import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { describe, test, expect, jest } from '@jest/globals';
import AddProductButton from "../AddProductButton";

describe("AddProductButton Component", () => {
  test("renders without crashing", () => {
    render(<AddProductButton onClick={() => {}} />);
    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  test("renders the add icon correctly", () => {
    render(<AddProductButton onClick={() => {}} />);
    const icon = screen.getByRole("img");
    expect(icon).toBeInTheDocument();
    expect(icon).toHaveAttribute("alt", "My Icon");
  });

  test("calls the onClick handler when button is clicked", () => {
    const handleClick = jest.fn();
    render(<AddProductButton onClick={handleClick} />);
    
    const button = screen.getByRole("button");
    fireEvent.click(button);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
