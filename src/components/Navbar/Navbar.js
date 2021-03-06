import React from "react";
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Volunteer Natwork
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
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item me-5">
              <a className="nav-link active" href="/">
                Home
              </a>
            </li>
            <li className="nav-item me-5">
              <a className="nav-link active" href="/">
                Donation
              </a>
            </li>
            <li className="nav-item me-5">
              <a className="nav-link active" href="/">
                Events
              </a>
            </li>
            <li className="nav-item me-5">
              <a className="nav-link active" href="/">
                Blog
              </a>
            </li>
            <li className="nav-item me-5">
              <a className="nav-link active" href="/">
                <button className="btn btn-success">Register </button>
              </a>
            </li>
            <li className="nav-item me-5">
              <a className="nav-link active" href="/">
                <button className="btn btn-primary"> Admin</button>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
