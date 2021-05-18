import React from "react";
const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          Volunteer Natwork
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <li class="nav-item me-5">
              <a class="nav-link active" href="/">
                Home
              </a>
            </li>
            <li class="nav-item me-5">
              <a class="nav-link active" href="/">
                Donation
              </a>
            </li>
            <li class="nav-item me-5">
              <a class="nav-link active" href="/">
                Events
              </a>
            </li>
            <li class="nav-item me-5">
              <a class="nav-link active" href="/">
                Blog
              </a>
            </li>
            <li class="nav-item me-5">
              <a class="nav-link active" href="/">
                <button className="btn btn-success">Register </button>
              </a>
            </li>
            <li class="nav-item me-5">
              <a class="nav-link active" href="/">
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
