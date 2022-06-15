import React from "react";
import { Link } from "react-router-dom";

export default function NavBarLink(props) {
  console.log(props.children);
  return (
    <Link to={`/${props.link}`} className="nav-link">
      <h2>
      {props.children}
      </h2>
    </Link>
  );
}
