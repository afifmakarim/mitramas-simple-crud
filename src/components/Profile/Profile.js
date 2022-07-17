import React from "react";
import "./Profile.scss";

export default function Profile() {
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
        <i className="bi bi-gear fs-4 border rounded-3 py-2 px-4" />
        <i className="bi bi-box-arrow-in-left fs-4 border rounded-3 py-2 px-4" />
      </div>
    </div>
  );
}
