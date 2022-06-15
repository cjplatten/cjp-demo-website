import React from "react";
import { Link } from "react-router-dom";
import NavBarLink from "./NavBarLink";

export default function Header() {
  return (
    <header className="Header">
      <h1>Header</h1>
      <nav className="Header-links">
        <NavBarLink link="">Home</NavBarLink>
        <NavBarLink link="projects">Projects</NavBarLink>
        <NavBarLink link="contact">Contact</NavBarLink>
      </nav>
    </header>
  );
}
