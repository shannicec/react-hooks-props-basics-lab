import React from "react";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import App from "../components/App";

const user = {
  name: "Liza",
  city: "New York",
  bio: "I am a software developer passionate about building user-friendly applications.",
  links: {
    github: "https://github.com/yourusername",
    linkedin: "https://linkedin.com/in/yourusername"
  }
};

test("passes 'bio' to <About> as a prop", () => {
  render(<App />);
  
  // Verifying that the bio is rendered correctly in the <About> component
  const bioParagraph = screen.getByText(user.bio);
  expect(bioParagraph).toBeInTheDocument();
});
