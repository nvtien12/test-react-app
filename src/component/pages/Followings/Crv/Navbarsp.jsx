import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-white py-3 shadow-sm  ">
        <div className="container">
          <a className="navbar-brand fw-bold fs-3" href="/">
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
          <div className="fs-4 " id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto ">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#thongdiep">
                  Thông Điệp 
                </a>
              </li>
              
              <li className="nav-item ">
                <a
                  className="nav-link"
              
                  href="#ngoaithat"
                >
                 Ngoại Thất
                </a>
                
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#noithat">
                  Nội Thất
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#antoan">An Toàn</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#pk">
                  Phụ Kiện
                </a>
              </li>
            </ul>
            
          </div>
        </div>
      </nav>
    </div>
  );
}
