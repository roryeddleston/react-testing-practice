import { render, screen } from "@testing-library/react";
import UserAccount from "../../src/components/UserAccount";
import { User } from "../../src/entities";

describe("UserAccount", () => {
  it("should render user name", () => {
    const user: User = { id: 123456, name: "Rory" };

    render(<UserAccount user={user} />);

    expect(screen.getByText(user.name)).toBeInTheDocument();
  });

  it("should render the edit button when user is admin"),
    () => {
      const user: User = { id: 123456, name: "Rory", isAdmin: true };

      render(<UserAccount user={user} />);

      const button = screen.getByRole("button");
      expect(button).toBeInTheDocument();
      expect(button).toHaveTextContent(/edit/i);
    };

  it("should render the edit button when user is admin"),
    () => {
      const user: User = { id: 123456, name: "Rory", isAdmin: false };

      render(<UserAccount user={user} />);

      const button = screen.queryByRole("button");
      expect(button).not.toBeInTheDocument();
    };
});
