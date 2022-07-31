import React, { useState, useEffect } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { editData } from "../../redux/actions/dataActions";
import { useSelector, useDispatch } from "react-redux";
import toast from "react-hot-toast";

export default function EditForm({ show, buttontoggle, currentData }) {
  const [newData, setNewData] = useState({
    id: currentData.id,
    name: currentData.name,
    address: currentData.address,
    country: currentData.country,
    phone_number: currentData.phone_number,
    job_title: currentData.job_title,
    status: currentData.status,
  });
  const [submitted, setSubmitted] = useState(false);

  const { userData } = useSelector((state) => state.userInfo);
  const { isLoading, editDataItems, error } = useSelector(
    (state) => state.editData
  );

  const dispatch = useDispatch();

  const Change = (e) => {
    const { name, value } = e.target;
    setNewData({ ...newData, [name]: value });
  };

  const ChangeStatus = (e) => {
    setNewData({ ...newData, status: !newData.status });
  };

  const handleEditData = (e) => {
    e.preventDefault();
    dispatch(editData(userData.access_token, newData));
    setSubmitted(true);
    buttontoggle();
    setTimeout(() => {
      window.location.reload();
    }, 2000);
  };

  if (submitted && editDataItems.success) {
    toast.success("Successfully Edit Data");
    setSubmitted(false);
  }

  if (submitted && error) {
    toast.error("This didn't work.");
    setSubmitted(false);
  }

  return (
    <>
      <Modal show={show} buttontoggle={buttontoggle}>
        <Form>
          <Modal.Header>
            <Modal.Title>Edit Data</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="container-fluid">
              <div className="row py-3">
                <Form.Group className="mb-3">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="name"
                    placeholder="name@example.com"
                    name="name"
                    value={newData.name}
                    onChange={Change}
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Address</Form.Label>
                  <Form.Control
                    type="address"
                    placeholder="name@example.com"
                    name="address"
                    value={newData.address}
                    onChange={Change}
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Country</Form.Label>
                  <Form.Control
                    type="country"
                    placeholder="name@example.com"
                    name="country"
                    value={newData.country}
                    onChange={Change}
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Phone Number</Form.Label>
                  <Form.Control
                    type="phone_number"
                    placeholder="name@example.com"
                    name="phone_number"
                    value={newData.phone_number}
                    onChange={Change}
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Job Title</Form.Label>
                  <Form.Control
                    type="job_title"
                    placeholder="name@example.com"
                    name="job_title"
                    value={newData.job_title}
                    onChange={Change}
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Check
                    type="switch"
                    id="custom-switch"
                    name="status"
                    label="isActive"
                    value={!newData.status}
                    defaultChecked={currentData.status === true}
                    onChange={ChangeStatus}
                  />
                </Form.Group>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={buttontoggle}>
              Close
            </Button>
            <Button
              variant="primary"
              disabled={isLoading}
              onClick={!isLoading ? handleEditData : null}
            >
              {isLoading ? "Loading…" : "Save Changes"}
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
}
