import React, { useState, useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { fetchLogin } from "../../redux/actions/dataActions";

import "./LoginForm.scss";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { isLoading, isLoggedIn } = useSelector((state) => state.userInfo);
  let navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/");
    }
  }, [isLoggedIn, navigate]);

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(fetchLogin({ email, password })).then(() => {
      navigate(`/`);
    });
  };

  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className="font-bold">Email</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          onChange={(e) => setEmail(e.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label className="font-bold">Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Remember Me" />
      </Form.Group>

      <div class="vstack gap-4">
        <Button
          className="w-full"
          variant="primary"
          disabled={isLoading}
          onClick={!isLoading ? handleLogin : null}
        >
          {isLoading ? "Loading…" : "Sign In"}
        </Button>

        <Form.Text className="d-flex justify-content-center" muted>
          Don't have an account? &nbsp;<Link to={"#"}>Sign up for free</Link>
        </Form.Text>
      </div>
    </Form>
  );
}
