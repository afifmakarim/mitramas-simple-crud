import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { deleteData } from "../../redux/actions/dataActions";
import { useSelector, useDispatch } from "react-redux";
import toast from "react-hot-toast";

export default function DeleteForm({ show, buttontoggle, currentData }) {
  const [newData] = useState({
    id: currentData.id,
  });
  const { userData } = useSelector((state) => state.userInfo);
  const [submitted, setSubmitted] = useState(false);

  const { isLoading, deleteDataItems, error } = useSelector(
    (state) => state.deleteData
  );
  const dispatch = useDispatch();

  const handleDelete = (e) => {
    e.preventDefault();
    dispatch(deleteData(userData.access_token, newData));
    setSubmitted(true);
    buttontoggle();
    setTimeout(() => {
      window.location.reload();
    }, 2000);
  };

  if (deleteDataItems.success && submitted) {
    toast.success("Successfully Delete Data");
    setSubmitted(false);
  }

  if (error && submitted) {
    toast.error("This didn't work.");
    setSubmitted(false);
  }

  return (
    <>
      <Modal show={show} buttontoggle={buttontoggle}>
        <Modal.Header>
          <Modal.Title>Delete Confirmation</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure to delete {currentData.name} ?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={buttontoggle}>
            Close
          </Button>
          <Button
            variant="danger"
            disabled={isLoading}
            onClick={!isLoading ? handleDelete : null}
          >
            {isLoading ? "Loading…" : "Confirm Delete"}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
