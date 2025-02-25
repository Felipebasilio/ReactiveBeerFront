import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Button from "../Button";

describe("Button Component", () => {
  test("renders button with label", () => {
    render(<Button label="Click Me" />);
    expect(screen.getByText("Click Me")).toBeInTheDocument();
  });

  test("renders button with children", () => {
    render(
      <Button>
        <span>Child Element</span>
      </Button>
    );
    expect(screen.getByText("Child Element")).toBeInTheDocument();
  });

  test("applies additional class names", () => {
    render(<Button className="custom-class" label="Click Me" />);
    const button = screen.getByText("Click Me");
    expect(button).toHaveClass("custom-class");
  });

  test("calls onClick handler when clicked", () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick} label="Click Me" />);
    fireEvent.click(screen.getByText("Click Me"));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test("renders button with default padding class", () => {
    render(<Button label="Click Me" />);
    const button = screen.getByText("Click Me");
    expect(button).toHaveClass("btn p-3");
  });
});
