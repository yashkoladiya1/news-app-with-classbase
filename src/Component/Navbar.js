import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg bg-dark  ">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
              <img src="news.png" width="50px" alt="" />
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon "></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto   mb-lg-0">
                <li className="nav-item ">
                  <Link
                    className="nav-link text-light"
                    aria-current="page"
                    to="/"
                  >
                    General
                  </Link>
                </li>
                {/* <li className="nav-item"><Link className="nav-link text-light" to="/">About</Link></li> */}
                <li className="nav-item">
                  <Link className="nav-link text-light" to="/business">
                    Business
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-light" to="/entertainment">
                    Entertainment
                  </Link>
                </li>
                {/* <li className="nav-item"><Link className="nav-link text-light" to="/general">General</Link></li> */}
                <li className="nav-item">
                  <Link className="nav-link text-light" to="/health">
                    Health
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-light" to="/science">
                    Science
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-light" to="/sports">
                    Sports
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-light" to="/technology">
                    Technology
                  </Link>
                </li>
              </ul>
              <div className="d-flex text-light " role="search">
                <div className="p-2 doc">
                  <i className="fa-solid fa-magnifying-glass skill"></i>
                </div>
                <div className="p-2 doc">
                  <i className="fa-brands fa-facebook-f skill"></i>
                </div>
                <div className="p-2 doc">
                  <i className="fa-brands fa-twitter skill"></i>
                </div>
                <div className="p-2 doc">
                  <i className="fa-brands fa-google-plus-g skill"></i>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
