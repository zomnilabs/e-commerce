import React from "react";
import "./signin.css";
import { Form, Button, Input, Icon } from "antd";
import { Link } from "react-router-dom";
import logo from "../../../src/logo.png";

function SignIn() {
  return (
    <div className="Login">
      <header className="login-header">
        <div className="form">
          <img src={logo} className="App-logo" alt="logo" />
          <br />
          <label className="login">SIGN UP</label>

          <Form>
            <Form.Item>
              <Input
                className="fullname"
                prefix={
                  <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                }
                placeholder="Fullname"
              />
              <br />
              <Input
                className="email"
                prefix={
                  <Icon type="mail" style={{ color: "rgba(0,0,0,.25)" }} />
                }
                placeholder="Email"
              />
              <br />

              <Input
                className="password"
                prefix={
                  <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
                }
                type="password"
                placeholder="Password"
              />
              <Input
                className="confirm"
                prefix={
                  <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
                }
                placeholder="Confirm Password"
              />
            </Form.Item>
            <Form.Item>
              <Link to="/login">
                <Button
                  type="primary"
                  htmlType="submit"
                  className="button"
                  style={{ color: "rgba(#D5C0BF)" }}
                >
                  Sign Up
                </Button>
              </Link>
            </Form.Item>
          </Form>
        </div>
      </header>
    </div>
  );
}

export default SignIn;
