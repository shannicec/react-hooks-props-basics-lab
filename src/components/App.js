import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";

const user = {
  name: "Liza",
  city: "New York",
  bio: "I am a software developer passionate about building user-friendly applications.",
  links: {
    github: "https://github.com/yourusername",
    linkedin: "https://linkedin.com/in/yourusername"
  }
};

function App() {
  return (
    <div>
      <NavBar />
      <Home name={user.name} city={user.city} />
      <About bio={user.bio} github={user.links.github} linkedin={user.links.linkedin} />
    </div>
  );
}

export default App;
