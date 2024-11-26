import React from "react";
import { useState, useEffect } from "react";
import "./NavBar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { SlSettings } from "react-icons/sl";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  useEffect(() => {
    if (!isDarkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [isDarkMode]);
  return (
    <>
      <nav className="navbar navbar-expand-lg  nav-bar-fixed">
        <div className="container">
          <Link to={"/"} className="no-underline">
            <a className="navbar-brand fw-bolder" href="#">
              HACKFLIX
            </a>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse d-flex justify-content-between"
            id="navbarNavDropdown"
          >
            <ul className="navbar-nav">
              <Link to={"/"} className="no-underline">
                <li className="nav-item">
                  <a className="nav-link active " aria-current="page" href="#">
                    Home
                  </a>
                </li>
              </Link>
              <Link to={"/movies"} className="no-underline">
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Movies
                  </a>
                </li>
              </Link>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Recomendations
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <SlSettings />
                </a>
                <ul className="dropdown-menu">
                  <li>
                    {" "}
                    <a
                      className="dropdown-item"
                      href="#"
                      onClick={() => setIsDarkMode(!isDarkMode)}
                    >
                      {isDarkMode
                        ? "Switch to Dark Mode"
                        : "Switch to Light Mode"}
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
            {/*<form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>*/}
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
