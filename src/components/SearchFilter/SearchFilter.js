import React from "react";
import { Form, Button } from "react-bootstrap";

export default function SearchFilter({ search, setSearch }) {
  const Change_Filter = (e) => {
    setSearch(e.target.value);
  };
  return (
    <>
      <div className="mb-4 w-25">
        <Form className="d-flex">
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
            value={search}
            onChange={Change_Filter}
          />
        </Form>
      </div>
    </>
  );
}
