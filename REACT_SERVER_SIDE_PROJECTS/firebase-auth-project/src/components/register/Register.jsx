import React, { useContext, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { AuthContext } from "../providers/AuthProviders";
const MySwal = withReactContent(Swal);

const Register = () => {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  // Restructured

  const { createUser, verifyEmailAddress } = useContext(AuthContext);
  // Restructured

  const handleSubmit = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;

    // Restructured signed up
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        setSuccess("User creation successful!!!");
        // sendVerificationEmail(userCredential.user);
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        setError(error.message);
      });
    // Restructured

    // Restructured verify email
    verifyEmailAddress()
      .then((result) => {
        MySwal.fire({
          position: "top-end",
          icon: "success",
          title: "Please verify your email address.",
          showConfirmButton: false,
          timer: 2500,
        });
        console.log(result);
      })
      .catch((error) => {
        console.log(error.message);
      });

    // Clear message
    setSuccess("");
    setError("");

    // Sign up
    // createUserWithEmailAndPassword(auth, email, password)
    //   .then((userCredential) => {
    //     const user = userCredential.user;
    //     setSuccess("User creation successful!!!");
    //     sendVerificationEmail(userCredential.user);
    //   })
    //   .catch((error) => {
    //     const errorCode = error.code;
    //     const errorMessage = error.message;
    //     console.log(errorCode, errorMessage);
    //     setError(error.message);
    //   });
  };
  // const sendVerificationEmail = () => {
  //   sendEmailVerification(auth.currentUser)
  //     .then((result) => {
  //       MySwal.fire({
  //         position: "top-end",
  //         icon: "success",
  //         title: "Please verify your email address.",
  //         showConfirmButton: false,
  //         timer: 2000,
  //       });
  //       console.log(result);
  //     })
  //     .catch((error) => {
  //       const errorCode = error.code;
  //       const errorMessage = error.message;
  //       console.log(errorCode, errorMessage);
  //     });
  // };

  return (
    <div className="d-flex align-items-center justify-content-center vh-100">
      <Form
        onSubmit={handleSubmit}
        className="w-25 p-5 border rounded shadow-lg"
      >
        <h2 className="text-primary">Register</h2>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            placeholder="Enter name"
            required
            className="form-control-sm"
          />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
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
        <p>
          <small>
            Member already ? Please <Link to="/login">Login</Link>
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

export default Register;
