import React, { Fragment, useState } from "react";
import { Link, withRouter } from "react-router-dom";
import "./auth.css";
import Logo from "../../static/img/logoClassUp.png";
import Log from "../../static/img/study-group-2018.png";
import Propstypes from "prop-types";
import API from "../../API/AuthAPI";

import { Image } from "react-bootstrap";
import { Button, Form, FormGroup, Label, Input, Row, Col } from "reactstrap";

export const Login = ({ history }) => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    isMobile: false,
  });
  const { username, password, isMobile } = formData;
  window.addEventListener(
    "resize",
    () => {
      setFormData({ isMobile: window.innerWidth < 1200 });
    },
    false
  );
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    const response = await API.login({ 'username': formData.username, 'password': formData.password })
    const responseJson = await response.json()
    await localStorage.setItem('token', responseJson.token);
    history.push("/");
  };

  return (
    <Fragment>
      <Row>
        <Col sm="12" xxs="12" md="4" lg="4">
          <div className={!isMobile && "centerdiv"}>
            <div className="ml-5">
              <Image className="logo" src={Logo} />
            </div>

            <h4 className="mt-3 sign-in-to-class-up">Sign in to ClassUp</h4>
            <p className="please-enter-your-cr">
              Please enter your credentials to proceed.
            </p>
            <Form className="mt-3" onSubmit={(e) => onSubmit(e)}>
              <FormGroup>
                <Label>Email / username</Label>
                <Input
                  placeholder="Email"
                  type="username"
                  name="username"
                  value={username}
                  onChange={(e) => handleChange(e)}
                />
              </FormGroup>
              <FormGroup>
                <Label>Password</Label>
                <Input
                  placeholder="Password"
                  type="password"
                  name="password"
                  value={password}
                  onChange={(e) => handleChange(e)}
                />
              </FormGroup>
              <Button className="btn btn-lg btn-primary btn-block">
                Login
              </Button>
              <div className="text-center pt-3">
                <Link to="/register">
                  <p>Create Account</p>
                </Link>
                <Link to="/forgot">
                  <p> Forgot your password?</p>
                </Link>
              </div>
            </Form>
          </div>
        </Col>
        {!isMobile && (
          <Col sm="12" xxs="12" md="8" lg="8">
            <Image className="bg" src={Log}></Image>
          </Col>
        )}
      </Row>
    </Fragment>
  );
};

export default withRouter(Login);
Login.propTypes = { history: Propstypes.object };
