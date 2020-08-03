import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import "./auth.css";
import Logo from "../../static/img/logoClassUp.png";
import Log from "../../static/img/undraw_new_entries_nh3h.svg";

import { Image } from "react-bootstrap";
import { Button, Form, FormGroup, Label, Input, Row, Col } from "reactstrap";

export const Register = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    isMobile: false,
  });
  const { email, password, isMobile } = formData;
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
                <Label>Full Name</Label>
                <Input
                  placeholder="Email"
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => handleChange(e)}
                />
              </FormGroup>
              <FormGroup>
                <Label>Email</Label>
                <Input
                  placeholder="Email"
                  type="email"
                  name="email"
                  value={email}
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
                <Link to="/login">
                  <p> Already have an account?</p>
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

export default Register;
