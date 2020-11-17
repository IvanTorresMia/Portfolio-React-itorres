import React from "react";
import { Link } from "react-router-dom";
import Style from './style.css'

function NavBar() {
  return (
    <header className="mb-5 border-bottom Nav">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark bottom-line">
        <a className="navbar-brand my-header p-3 text relative" href="/">
          Ivan Torres
        </a>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link
                to="/"
                className={
                  window.location.pathname === "/"
                    ? "nav-link active"
                    : "nav-link"
                }
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/AboutMe"
                className={
                  window.location.pathname === "/AboutMe"
                    ? "nav-link active"
                    : "nav-link"
                }
              >
                About Me
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/Contact"
                className={
                  window.location.pathname === "/Contact"
                    ? "nav-link active"
                    : "nav-link"
                }
              >
               Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default NavBar;
