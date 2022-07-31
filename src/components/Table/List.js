import React, { useState } from "react";
import { Button } from "react-bootstrap";
import DeleteForm from "../Modal/DeleteForm";
import EditForm from "../Modal/EditForm";

export default function List({ data, keys, Delete }) {
  const [show, setShow] = useState(false);
  const [showDeleteModal, setDeleteModalShow] = useState(false);

  const handleModal = () => setShow(!show);
  const deleteModal = () => setDeleteModalShow(!showDeleteModal);

  return (
    <>
      <DeleteForm
        show={showDeleteModal}
        buttontoggle={deleteModal}
        currentData={data}
      />
      <EditForm show={show} buttontoggle={handleModal} currentData={data} />
      <tr key={keys}>
        <td>{data.name}</td>
        <td>{data.address}</td>
        <td>{data.country}</td>
        <td>{data.phone_number}</td>
        <td>{data.job_title}</td>
        <td>{data.status ? "Active" : "Inactive"}</td>
        <td className="d-flex p-4 gap-2">
          <Button variant="primary" onClick={handleModal}>
            <i className="bi bi-pencil-square" />
          </Button>
          <Button
            variant="primary"
            className="btn btn-danger"
            onClick={deleteModal}
          >
            <i className="bi bi-trash" />
          </Button>
        </td>
      </tr>
    </>
  );
}
