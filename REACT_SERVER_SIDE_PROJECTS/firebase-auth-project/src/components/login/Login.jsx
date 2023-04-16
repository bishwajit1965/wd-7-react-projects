import React, { useContext, useRef, useState } from "react";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProviders";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const MySwal = withReactContent(Swal);

const Login = () => {
  const { userLogIn, changeUserPassword } = useContext(AuthContext);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const emailRef = useRef(null);

  const handleLogin = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;

    userLogIn(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        MySwal.fire({
          position: "top-end",
          icon: "success",
          title: "Login successful!!!.",
          showConfirmButton: false,
          timer: 2000,
        });
        setSuccess("User login successful!");
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errormessage = error.message;
      });
    // Empty the messages
    setSuccess("");
    setError("");
  };

  const handleResetPassword = () => {
    const email = emailRef.current.value;
    console.log(email);
    changeUserPassword(email)
      .then(() => {
        MySwal.fire({
          position: "top-end",
          icon: "success",
          title: "Please verify your email address.",
          showConfirmButton: false,
          timer: 2000,
        });
      })
      .catch((error) => {
        setError(error.message);
        MySwal.fire({
          position: "top-end",
          icon: "error",
          title: "Provide your email address.",
          showConfirmButton: false,
          timer: 3000,
        });
      });
    // Empty the messages
    setSuccess("");
    setError("");
  };
  return (
    <div className="d-flex align-items-center justify-content-center vh-100">
      <Form
        onSubmit={handleLogin}
        className="w-25 border p-5 rounded shadow-lg"
      >
        <h2 className="text-primary">Please Login</h2>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            ref={emailRef}
            placeholder="Enter email"
            required
            className="form-control-sm"
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Password"
            required
            className="form-control-sm"
          />
        </Form.Group>
        <p className="mt-2">
          <small>
            Forgot password ?{" "}
            <Link onClick={handleResetPassword}>Reset Password</Link>{" "}
          </small>
        </p>
        <p>
          <small>
            New to this website? Please <Link to="/register">Register</Link>
          </small>
        </p>
        <div className="">
          {error && <p className="text-danger"> {error}</p>}
          {success && <p className="text-success"> {success}</p>}
        </div>

        <Button variant="primary mt-2" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Login;
