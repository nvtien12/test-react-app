import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-white py-3 shadow-sm ">
        <div className="container">
          <a className="navbar-brand fw-bold fs-3" href="#">
            HONDA ÔTÔ ĐẮK LẮK
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse fs-5" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Trang chủ
                </a>
              </li>
              
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                  to="./following"
                  role="button"
                  aria-expanded="false"
                >
                  Sản Phẩm
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item"  href="./following/accord">
                      Honda Accrod
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Honda Civic
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Honda Crv
                    </a>
                  </li>
                  
                  <li>
                    <a className="dropdown-item" href="#">
                      Honda Hrv
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Honda City
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Tin Tức
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Liên Hệ</a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-1"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}
