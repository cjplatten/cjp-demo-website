import React from "react";
import Contact from "./Contact";
import Profile from "./Profile";
import Projects from "./Projects";

export default function Home() {
  return (
    <div>
      <Profile />
      <Projects />
      <Contact />
    </div>
  );
}
