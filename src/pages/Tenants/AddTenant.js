import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { addNewData } from "../../redux/actions/dataActions";

export default function AddTenant() {
  const [newData, setNewData] = useState({
    name: "",
    address: "",
    country: "",
    phone_number: "",
    job_title: "",
    status: false,
  });

  const { userData } = useSelector((state) => state.userInfo);
  const { isLoading, addDataItems, error } = useSelector(
    (state) => state.addData
  );

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const Change = (e) => {
    const { name, value } = e.target;
    setNewData({ ...newData, [name]: value });
  };

  const handleAddData = (e) => {
    e.preventDefault();
    dispatch(addNewData(userData.access_token, newData)).then(() => {
      navigate(`/tenant`);
      toast.success("Successfully Add Data");
    });
  };

  if (error) {
    toast.error("This didn't work.");
  }
  return (
    <div className="d-flex flex-column w-50 m-4">
      <h4 className="my-4">Add New Data</h4>
      <Form onSubmit={handleAddData}>
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="name"
            placeholder="name@example.com"
            name="name"
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
            onChange={Change}
          />
        </Form.Group>
        <Button
          variant="primary"
          disabled={isLoading}
          onClick={!isLoading ? handleAddData : null}
        >
          {isLoading ? "Loading…" : "Save Changes"}
        </Button>
      </Form>
    </div>
  );
}
