import React, { Fragment, useState } from "react";
// withRouter, even if it's not a class it can use router props
import { Link, withRouter } from "react-router-dom";
import Propstypes from "prop-types";
import "./auth.css";
import Logo from "../../static/img/logoClassUp.png";
import Log from "../../static/img/examDay.svg";

import { Image } from "react-bootstrap";
import { Button, Form, FormGroup, Label, Input, Row, Col } from "reactstrap";

export const Register = ({ history }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    isMobile: false,
  });
  const { email, password, firstname, lastname, isMobile } = formData;
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
    history.push("/login");
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
                />
              </FormGroup>
              <FormGroup>
                <Label>Last Name</Label>
                <Input
                  placeholder="Last Name"
                  type="text"
                  name="lastname"
                  value={lastname}
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
export default withRouter(Register);
