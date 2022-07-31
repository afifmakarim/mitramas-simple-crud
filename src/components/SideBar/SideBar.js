import React, { useState } from "react";
import CustomOffcanvas from "../Offcanvas/CustomOffcanvas";
import Profile from "../Profile/Profile";
import NavList from "../NavList/NavList";
import "./SideBar.scss";
import { Link } from "react-router-dom";

export default function SideBar() {
  const [show, setShow] = useState(false);

  const handleOffcanvas = () => setShow(!show);

  return (
    <div className="sidebar-wrapper d-flex flex-column border">
      <div className="logo p-4 d-flex justify-content-center">
        <Link to={"/"} className="fw-bold fs-1 text-decoration-none">
          TESTING
        </Link>
      </div>
      <span
        className="hamburger fs-1 d-flex justify-content-center text-bg-primary"
        onClick={handleOffcanvas}
      >
        <i class="bi bi-list"></i>
      </span>
      <div className="sidebar-item p-5 d-flex flex-column justify-content-between h-100">
        <NavList />
        <Profile />
      </div>

      <CustomOffcanvas show={show} handle={handleOffcanvas} />
    </div>
  );
}
