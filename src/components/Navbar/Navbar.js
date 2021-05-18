import React from "react";
const Navbar = () => {
  return (
    <nav classname="navbar navbar-expand-lg navbar-light bg-light">
      <div classname="container-fluid">
        <a classname="navbar-brand" href="#">
          Volunteer Natwork
        </a>
        <button
          classname="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span classname="navbar-toggler-icon"></span>
        </button>
        <div classname="collapse navbar-collapse" id="navbarSupportedContent">
          <ul classname="navbar-nav ms-auto mb-2 mb-lg-0">
            <li classname="nav-item me-5">
              <a classname="nav-link active" href="/">
                Home
              </a>
            </li>
            <li classname="nav-item me-5">
              <a classname="nav-link active" href="/">
                Donation
              </a>
            </li>
            <li classname="nav-item me-5">
              <a classname="nav-link active" href="/">
                Events
              </a>
            </li>
            <li classname="nav-item me-5">
              <a classname="nav-link active" href="/">
                Blog
              </a>
            </li>
            <li classname="nav-item me-5">
              <a classname="nav-link active" href="/">
                <button className="btn btn-success">Register </button>
              </a>
            </li>
            <li classname="nav-item me-5">
              <a classname="nav-link active" href="/">
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
