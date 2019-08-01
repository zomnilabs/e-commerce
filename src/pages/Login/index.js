import React from "react";
import logo from "../../../src/logo.png";
import "./login.css";
import { Form, Button, Icon } from "antd";
import { Link } from "react-router-dom";

function LoginForm() {
  return (
    <div className="Login">
      <header className="login-header">
        <div className="form">
          <img src={logo} className="App-logo" alt="logo" />
          <br />
          <label className="login">LOGIN</label>
          <Form>
            <div className="inputs">
              <input className="input" type="text" placeholder=" Username" />
              <br />
              <input className="input" type="text" placeholder="Password" />
            </div>
            <Form.Item>
              <Link to="/">
                <Button
                  type="primary"
                  htmlType="submit"
                  className="button"
                  style={{ color: "rgba(#D5C0BF)" }}
                >
                  Log in
                </Button>
              </Link>
            </Form.Item>
            <div>
              <p>Don't have account yet?</p>
            </div>
            <Link to="/signin">
              <div className="register">
                <p>Register here.</p>
              </div>
            </Link>
          </Form>
        </div>
      </header>
    </div>
  );
}

export default LoginForm;
