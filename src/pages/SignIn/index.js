import React from "react";
import "./signin.css";
import { Form, Button } from "antd";
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
            <div className="inputs">
              <input className="input" type="text" placeholder=" Username" />
              <br />
              <input className="input" type="text" placeholder="Password" />
            </div>
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
