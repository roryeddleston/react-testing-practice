import { render, screen } from "@testing-library/react"; //itr shortcut
import Greet from "../../src/components/Greet";

describe("Greet component", () => {
  it("should render Hello with the name when name is provided", () => {
    render(<Greet name="Rory" />);

    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent(/rory/i);
  });

  it("should render login button when name is not provided", () => {
    render(<Greet />);

    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent(/login/i);
  });
});
