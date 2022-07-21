import React from "react";
import { Link } from "react-router-dom";
// import NavBarLink from "./NavBarLink";

export default function Header() {
  return (
    <header className="Header">
      <h1>Carrie Platten</h1>
      <h2>Full Stack Developer</h2>
      <Link className="nav-link" to="/">
        Home
      </Link>
      {/* <nav className="Header-links">
        <NavBarLink link="">Home</NavBarLink>
        <NavBarLink link="projects">Projects</NavBarLink>
        <NavBarLink link="contact">Contact</NavBarLink>
      </nav> */}
    </header>
  );
}
