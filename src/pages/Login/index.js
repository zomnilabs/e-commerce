import React from "react";
import logo from "../../../src/logo.png";
import "./login.css";
import { Form, Button, Icon, Input } from "antd";
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
            <Form.Item>
              <Input
                className="username"
                prefix={
                  <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                }
                placeholder="Username"
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
            </Form.Item>
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

            <p>Don't have account yet?</p>

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
