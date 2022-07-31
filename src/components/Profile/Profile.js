import React from "react";
import { Button } from "react-bootstrap";
import { logout } from "../../redux/actions/dataActions";
import { useDispatch } from "react-redux";

import "./Profile.scss";

export default function Profile() {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };
  return (
    <div className="profile d-flex flex-column align-items-center">
      <img
        src="https://picsum.photos/600"
        className="rounded-circle img-thumbnail display-pictures"
        alt="..."
      />
      <h4 className="pt-3">Afif Makarim</h4>
      <p>afifmakarim88@gmail.com</p>
      <div className="d-flex flex-row gap-3 justify-content-center">
        <Button variant="flat" className="fs-4 border rounded-3 py-2 px-4">
          <i className="bi bi-gear " />
        </Button>
        <Button
          variant="flat"
          className="fs-4 border rounded-3 py-2 px-4"
          onClick={handleLogout}
        >
          <i className="bi bi-box-arrow-in-left " />
        </Button>
      </div>
    </div>
  );
}
