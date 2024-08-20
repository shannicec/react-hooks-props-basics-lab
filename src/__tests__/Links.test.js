import React from "react";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import Links from "../components/Links";

test("renders the h3 with the text 'Links'", () => {
  render(<Links github="https://github.com/liza" linkedin="https://www.linkedin.com/in/liza/" />);
  const h3Element = screen.getByText("Links");
  expect(h3Element).toBeInTheDocument();
});

test("displays the URL of a Github link passed down as a prop", () => {
  render(<Links github="https://github.com/liza" />);
  const githubLink = screen.getByText("https://github.com/liza");
  expect(githubLink).toBeInTheDocument();
});

test("displays the URL of a LinkedIn link passed down as a prop", () => {
  render(<Links linkedin="https://www.linkedin.com/in/liza/" />);
  const linkedinLink = screen.getByText("https://www.linkedin.com/in/liza/");
  expect(linkedinLink).toBeInTheDocument();
});
