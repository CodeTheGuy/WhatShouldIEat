import React from "react";
import { Link } from "react-router-dom";
import * as ROUTES from "../../constants/routes";
const Navbar = () => (
  <div>
    <ul id="nav">
      <li>
        <Link to={ROUTES.HOME}>Home</Link>
      </li>
      <li>
        <Link to={ROUTES.SEARCH}>Search</Link>
      </li>
      <li>
        <Link to={ROUTES.STARTQUIZ}>Quiz</Link>
      </li>
      <li>
        <Link to={ROUTES.ACCOUNT}>Account</Link>
      </li>
      <li>
        <Link to={ROUTES.ABOUT}>About</Link>
      </li>
    </ul>
  </div>
);
export default Navbar;
