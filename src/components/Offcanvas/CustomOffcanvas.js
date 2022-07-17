import React from "react";
import { Offcanvas } from "react-bootstrap";
import NavList from "../NavList/NavList";
import Profile from "../Profile/Profile";

export default function CustomOffcanvas({ show, handle }) {
  return (
    <Offcanvas show={show} onHide={handle}>
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Menu</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body className="d-flex flex-column justify-content-between">
        <NavList />
        <Profile />
      </Offcanvas.Body>
    </Offcanvas>
  );
}
