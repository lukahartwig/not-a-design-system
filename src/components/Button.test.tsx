import { render, screen } from "@testing-library/react";
import { Button } from "./Button";

test("renders a button", () => {
  render(<Button>Click Me</Button>);
  expect(screen.getByRole("button", { name: /click me/i })).toBeInTheDocument();
});
