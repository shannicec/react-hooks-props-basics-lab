import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';  
import About from "../components/About";
import user from "../data/user";

test("renders a <p> element with the bio from props", () => {
  render(<About bio="I made this" links={user.links} />);
  const bioElement = screen.getByText("I made this");
  expect(bioElement).toBeInTheDocument();
});

test("does not render a <p> element if the bio is not included in props", () => {
  render(<About links={user.links} />);
  const bioElement = screen.queryByText(user.bio);
  expect(bioElement).toBeNull();
});

test("does not render a <p> element if the bio is an empty string", () => {
  render(<About bio="" links={user.links} />);
  const bioElement = screen.queryByText(user.bio);
  expect(bioElement).toBeNull();
});
