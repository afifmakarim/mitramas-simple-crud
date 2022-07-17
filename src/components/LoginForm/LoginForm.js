import React from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

import "./LoginForm.scss";

export default function LoginForm() {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className="font-bold">Email</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label className="font-bold">Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Remember Me" />
      </Form.Group>

      <div class="vstack gap-4">
        <Button variant="primary" type="submit" className="w-full">
          Sign In
        </Button>
        <Form.Text className="d-flex justify-content-center" muted>
          Don't have an account? &nbsp;<Link to={"#"}>Sign up for free</Link>
        </Form.Text>
      </div>
    </Form>
  );
}
