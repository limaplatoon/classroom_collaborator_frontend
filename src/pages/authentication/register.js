import React, { Fragment, useState } from "react";
// withRouter, even if it's not a class it can use router props
import { Link, withRouter } from "react-router-dom";
import Propstypes from "prop-types";
import "./auth.css";
import Logo from "../../static/img/logoClassUp.png";
import Log from "../../static/img/examDay.svg";
import API from "../../API/AuthAPI";

import { Image } from "react-bootstrap";
import { Button, Form, FormGroup, Label, Input, Row, Col } from "reactstrap";

const validEmailRegex = RegExp(
  /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
);

export const Register = ({ history }) => {
  const [errorsWarning, setErrorsWarning] = useState(false);

  const [errName, setErrName] = useState("");
  const [errLast, setErrLast] = useState("");
  const [errEmail, setErrEmail] = useState("");
  const [errPs, setErrPs] = useState("");

  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    isMobile: false,
    errors: {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
    },
  });
  const { email, password, firstname, username, isMobile } = formData;
  window.addEventListener(
    "resize",
    () => {
      setFormData({ isMobile: window.innerWidth < 1200 });
    },
    false
  );
  const handleChange = (e) => {
    const { name, value } = e.target;
    //setFormData({ ...formData, [name]: value });

    e.preventDefault();

    setFormData({ ...formData, [name]: value });

    switch (name) {
      case "firstname":
        if (!value || value.length < 2) {
          setErrName("First Name must be 2 characters long!");
        } else {
          setErrName("");
        }
        break;
      case "username":
        if (!value || value.length < 2) {
          setErrLast("Last Name must be 2 characters long!");
        } else {
          setErrLast("");
        }
        break;
      case "email":
        if (!validEmailRegex.test(value)) {
          setErrEmail("Email is not valid!");
        } else {
          setErrEmail("");
        }
        break;
      case "password":
        if (!value || value.length < 2) {
          setErrPs("Password must be 2 characters long!");
        } else {
          setErrPs("");
        }
        break;
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const isEmpty =
      !formData.firstname ||
      !formData.username ||
      !formData.email ||
      !formData.password;

    if (!errName && !errLast && !errEmail && !errPs && !isEmpty) {

      const response = await API.register({ 'username': formData.username, 'password': formData.password })
      const responseJson = await response.json()
      localStorage.setItem('token', responseJson.token);

      history.push("/");
    } else {
      setErrorsWarning(true);
    }
  };

  return (
    <Fragment>
      <Row>
        <Col sm="12" xxs="12" md="4" lg="4">
          <div className={!isMobile && "centerdiv"}>
            <div className="ml-5">
              <Image className="logo" src={Logo} />
            </div>

            <h4 className="mt-3 ml-5 sign-in-to-class-up">Join ClassUp</h4>
            <p className="free-membership">Free Membership</p>
            <Form className="mt-3" onSubmit={(e) => onSubmit(e)}>
              <FormGroup>
                <Label>First Name</Label>
                <Input
                  placeholder="First Name"
                  type="text"
                  name="firstname"
                  value={firstname}
                  onChange={(e) => handleChange(e)}
                  noValidate
                />
                {errName ? <span className="error">{errName}</span> : ""}
              </FormGroup>

              <FormGroup>
                <Label>Username</Label>
                <Input
                  placeholder="Username"
                  type="text"
                  name="username"
                  defaultValue={username}
                  onChange={(e) => handleChange(e)}
                  noValidate
                />
                {errLast ? <span className="error">{errLast}</span> : ""}
              </FormGroup>

              <FormGroup>
                <Label>Email</Label>
                <Input
                  placeholder="Email"
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => handleChange(e)}
                  noValidate
                />
                {errEmail ? <span className="error">{errEmail}</span> : ""}
              </FormGroup>
              <FormGroup>
                <Label>Password</Label>
                <Input
                  placeholder="Password"
                  type="password"
                  name="password"
                  defaultValue={password}
                  onChange={(e) => handleChange(e)}
                  noValidate
                />
                {errPs ? <span className="error">{errPs}</span> : ""}
              </FormGroup>
              <Button
                className="btn btn-lg btn-primary btn-block"
                style={{ border: errorsWarning ? "2px solid red" : null }}
              >
                Create Account
              </Button>

              <div className="text-center pt-3">
                <Link to="/login">
                  <p> Already have an account? Sign in</p>
                </Link>
              </div>
            </Form>
          </div>
        </Col>

        {!isMobile && (
          <Col sm="12" xxs="12" md="8" lg="8">
            <Image className="bgregister" src={Log}></Image>
          </Col>
        )}
      </Row>
    </Fragment>
  );
};
Register.propTypes = { history: Propstypes.object };
export default Register;
