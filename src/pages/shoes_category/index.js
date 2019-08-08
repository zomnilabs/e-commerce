import React from "react";
import "./shoes.css";
import { Icon } from "antd";
import { Link } from "react-router-dom";
import "antd/dist/antd.css";
import logo from "../../../src/logo.png";
import logoG from "../../../src/girly.png";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

function Shoes() {
  return (
    <body>
      <img src={logo} className="logo" alt="logo" />
      <img src={logoG} className="logoG" alt="logo" />
      <div className="top-nav-bar">
        <div className="search-box">
          <input
            type="text"
            className="form-control"
            placeholder="Search Something"
          />
          <div class="topnav">
            <Link to="/login">Login</Link>
            <Link to="/signin">Sign Up</Link>
            <Link to="/">Home</Link>
          </div>
        </div>
      </div>
      <div className="top-nav-bar2">
        <div class="topnav2">
          <Link to="/shoes">SHOES</Link>
          <a href="#welcome-section">CLOTHING</a>
          <a href="#welcome-section">ACCESSORIES</a>
          <a href="#welcome-section">MAKE UP & FRAGRANCES</a>
        </div>
      </div>
      <div>
        <p className="text1">
          <strong>Shoes & Sneakers</strong>
        </p>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-3 col-sm-6">
            <div className="product-grid9">
              <div className="product-image9">
                <a href="#">
                  <img
                    class="pic-1"
                    src="https://image.dhgate.com/0x0/f2/albu/g5/M00/7F/48/rBVaJFia5YmAUSjfAAJUp5yYH_g815.jpg
                    "
                    alt=""
                  />
                  <img
                    class="pic-2"
                    src="https://ae01.alicdn.com/kf/HTB1NnNNajDuK1Rjy1zjq6zraFXaC/Hot-2018-Glitter-Lips-Liquid-Lipstick-lot-Women-Brand-Makeup-Waterproof-Blue-Purple-Wine-Red-Color.jpg"
                    alt=""
                  />
                </a>
              </div>
              <div className="product-content">
                <h3 className="title">
                  <a href="#">Women's Top</a>
                </h3>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="product-grid9">
              <div className="product-image9">
                <a href="#">
                  <img
                    class="pic-1"
                    src="https://cdn.shopify.com/s/files/1/0082/2358/8410/products/2019-New-Arrival-women-pumps-shoes-Pointed-Toe-Office-Women-s-Shoes-Fashion-Solid-Flock-High_1000x.jpg?v=1549197481"
                    alt=""
                  />
                  <img
                    class="pic-2"
                    src="https://cdn.shopify.com/s/files/1/0082/2358/8410/products/2019-New-Arrival-women-pumps-shoes-Pointed-Toe-Office-Women-s-Shoes-Fashion-Solid-Flock-High_1000x.jpg?v=1549197481"
                    alt=""
                  />
                </a>
              </div>
              <div className="product-content">
                <h3 className="title">
                  <a href="#">Women's Top</a>
                </h3>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="product-grid9">
              <div className="product-image9">
                <a href="#">
                  <img
                    class="pic-1"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSN9uNTiluDSQ9sbGS9wj-oyUcIwcNpcAzQt86F8DzBjnjK-XVwhQ"
                    alt=""
                  />
                  <img
                    class="pic-2"
                    src="http://images-global.kikuu.com/upload-productImg-35942228091947723.jpg"
                    alt=""
                  />
                </a>
              </div>
              <div className="product-content">
                <h3 className="title">
                  <a href="#">Women's Top</a>
                </h3>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="product-grid9">
              <div className="product-image9">
                <a href="#">
                  <img
                    class="pic-1"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwFILymG_CiHTXLQtjCii-FqKDMa97b4qd_BboKE_WXPZDfODQ"
                    alt=""
                  />
                  <img
                    class="pic-2"
                    src="https://ae01.alicdn.com/kf/HTB1ya0kFmBYBeNjy0Feq6znmFXaE/Casual-Summer-Chiffon-Dress-Women-Clothes-2018-Sexy-Floral-Short-Beach-Dresses-Korean-Elegant-Vestido-De.jpg"
                    alt=""
                  />
                </a>
              </div>
              <div className="product-content">
                <h3 className="title">
                  <a href="#">Women's Top</a>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <div className="container">
        <div className="row">
          <div className="col-md-3 col-sm-6">
            <div className="product-grid9">
              <div className="product-image9">
                <a href="#">
                  <img
                    class="pic-1"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9nlqirmzvvJOXD6qFrxg1u0QWk9N5BS_mxQyQm-CGsEJsdTqqHQ"
                    alt=""
                  />
                  <img
                    class="pic-2"
                    src="https://ae01.alicdn.com/kf/HTB1NnNNajDuK1Rjy1zjq6zraFXaC/Hot-2018-Glitter-Lips-Liquid-Lipstick-lot-Women-Brand-Makeup-Waterproof-Blue-Purple-Wine-Red-Color.jpg"
                    alt=""
                  />
                </a>
              </div>
              <div className="product-content">
                <h3 className="title">
                  <a href="#">Women's Top</a>
                </h3>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="product-grid9">
              <div className="product-image9">
                <a href="#">
                  <img
                    class="pic-1"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4kzYUMwEuHCCv3xeDceREso0lLF-iXuNQ8zgghEV5iD_wbHPMZw"
                    alt=""
                  />
                  <img
                    class="pic-2"
                    src="https://cdn.shopify.com/s/files/1/0082/2358/8410/products/2019-New-Arrival-women-pumps-shoes-Pointed-Toe-Office-Women-s-Shoes-Fashion-Solid-Flock-High_1000x.jpg?v=1549197481"
                    alt=""
                  />
                </a>
              </div>
              <div className="product-content">
                <h3 className="title">
                  <a href="#">Women's Top</a>
                </h3>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="product-grid9">
              <div className="product-image9">
                <a href="#">
                  <img
                    class="pic-1"
                    src="http://images-global.kikuu.com/upload-productImg-35942228091947723.jpg"
                    alt=""
                  />
                  <img
                    class="pic-2"
                    src="http://images-global.kikuu.com/upload-productImg-35942228091947723.jpg"
                    alt=""
                  />
                </a>
              </div>
              <div className="product-content">
                <h3 className="title">
                  <a href="#">Women's Top</a>
                </h3>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="product-grid9">
              <div className="product-image9">
                <a href="#">
                  <img
                    class="pic-1"
                    src="https://ae01.alicdn.com/kf/HTB1ya0kFmBYBeNjy0Feq6znmFXaE/Casual-Summer-Chiffon-Dress-Women-Clothes-2018-Sexy-Floral-Short-Beach-Dresses-Korean-Elegant-Vestido-De.jpg"
                    alt=""
                  />
                  <img
                    class="pic-2"
                    src="https://ae01.alicdn.com/kf/HTB1ya0kFmBYBeNjy0Feq6znmFXaE/Casual-Summer-Chiffon-Dress-Women-Clothes-2018-Sexy-Floral-Short-Beach-Dresses-Korean-Elegant-Vestido-De.jpg"
                    alt=""
                  />
                </a>
              </div>
              <div className="product-content">
                <h3 className="title">
                  <a href="#">Women's Top</a>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <div className="container">
        <div className="row">
          <div className="col-md-3 col-sm-6">
            <div className="product-grid9">
              <div className="product-image9">
                <a href="#">
                  <img
                    class="pic-1"
                    src="https://ae01.alicdn.com/kf/HTB1NnNNajDuK1Rjy1zjq6zraFXaC/Hot-2018-Glitter-Lips-Liquid-Lipstick-lot-Women-Brand-Makeup-Waterproof-Blue-Purple-Wine-Red-Color.jpg"
                    alt=""
                  />
                  <img
                    class="pic-2"
                    src="https://ae01.alicdn.com/kf/HTB1NnNNajDuK1Rjy1zjq6zraFXaC/Hot-2018-Glitter-Lips-Liquid-Lipstick-lot-Women-Brand-Makeup-Waterproof-Blue-Purple-Wine-Red-Color.jpg"
                    alt=""
                  />
                </a>
              </div>
              <div className="product-content">
                <h3 className="title">
                  <a href="#">Women's Top</a>
                </h3>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="product-grid9">
              <div className="product-image9">
                <a href="#">
                  <img
                    class="pic-1"
                    src="https://cdn.shopify.com/s/files/1/0082/2358/8410/products/2019-New-Arrival-women-pumps-shoes-Pointed-Toe-Office-Women-s-Shoes-Fashion-Solid-Flock-High_1000x.jpg?v=1549197481"
                    alt=""
                  />
                  <img
                    class="pic-2"
                    src="https://cdn.shopify.com/s/files/1/0082/2358/8410/products/2019-New-Arrival-women-pumps-shoes-Pointed-Toe-Office-Women-s-Shoes-Fashion-Solid-Flock-High_1000x.jpg?v=1549197481"
                    alt=""
                  />
                </a>
              </div>
              <div className="product-content">
                <h3 className="title">
                  <a href="#">Women's Top</a>
                </h3>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="product-grid9">
              <div className="product-image9">
                <a href="#">
                  <img
                    class="pic-1"
                    src="http://images-global.kikuu.com/upload-productImg-35942228091947723.jpg"
                    alt=""
                  />
                  <img
                    class="pic-2"
                    src="http://images-global.kikuu.com/upload-productImg-35942228091947723.jpg"
                    alt=""
                  />
                </a>
              </div>
              <div className="product-content">
                <h3 className="title">
                  <a href="#">Women's Top</a>
                </h3>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="product-grid9">
              <div className="product-image9">
                <a href="#">
                  <img
                    class="pic-1"
                    src="https://ae01.alicdn.com/kf/HTB1ya0kFmBYBeNjy0Feq6znmFXaE/Casual-Summer-Chiffon-Dress-Women-Clothes-2018-Sexy-Floral-Short-Beach-Dresses-Korean-Elegant-Vestido-De.jpg"
                    alt=""
                  />
                  <img
                    class="pic-2"
                    src="https://ae01.alicdn.com/kf/HTB1ya0kFmBYBeNjy0Feq6znmFXaE/Casual-Summer-Chiffon-Dress-Women-Clothes-2018-Sexy-Floral-Short-Beach-Dresses-Korean-Elegant-Vestido-De.jpg"
                    alt=""
                  />
                </a>
              </div>
              <div className="product-content">
                <h3 className="title">
                  <a href="#">Women's Top</a>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />

      <div className="container">
        <div className="row2">
          <div className="columns">
            <h3 className="icon">
              <p>
                <Icon type="lock" />
              </p>
            </h3>
            <div className="Desc">
              {" "}
              <p>
                <strong>Pickup at any Store</strong>
              </p>
            </div>
            <a className="add-to-cart">Free shipping on orders over $65</a>
          </div>
          <div className="columns">
            <h3 className="icon">
              <p>
                <Icon type="question-circle" />
              </p>
            </h3>
            <p>
              {" "}
              <strong>Free returns</strong>
            </p>
            <a className="add-to-cart">30-days free return policy.</a>
          </div>
          <div className="columns">
            <h3 className="icon">
              <p>
                <Icon type="lock" />
              </p>
            </h3>
            <p>
              <strong>Secured payments</strong>
            </p>
            <a className="add-to-cart">We accept all major credit cards.</a>
          </div>

          <div className="columns">
            <h3 className="icon">
              <p>
                <Icon type="question-circle" />
              </p>
            </h3>
            <p>
              {" "}
              <strong>Customer service</strong>
            </p>
            <a className="add-to-cart">Top notch customer service.</a>
          </div>
        </div>
      </div>

      <MDBFooter className="font-small">
        <MDBContainer fluid className="text-center text-md-left">
          <MDBRow>
            <MDBCol md="6">
              <h5 className="title">Contact Info</h5>
              <p>
                <strong>Phone:</strong> (+63) 09123456789
                <br />
                <strong>Address:</strong> 1418 Riverwood Drive, Suite 3245
                Cottonwood, CA 96052, United State
              </p>
              <p>
                <strong>We Accept:</strong> 1418 Riverwood Drive, Suite 3245
                Cottonwood, CA 96052, United State
              </p>
              <Icon type="twitter" />
              <Icon type="instagram" />
              <Icon type="facebook" />
            </MDBCol>
            <MDBCol md="6">
              <h5 className="title">Get Help</h5>
              <ul>
                <li className="list-unstyled">
                  <a href="#!">About</a>
                </li>
                <li className="list-unstyled">
                  <a href="#!">Delivery Information</a>
                </li>
                <li className="list-unstyled">
                  <a href="#!">Sale Terms & Condition</a>
                </li>
                <li className="list-unstyled">
                  <a href="#!">Returns & Refunds</a>
                </li>
              </ul>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
        <div className="footer-copyright">
          <MDBContainer fluid>
            &copy; {new Date().getFullYear()} Copyright:{" "}
            <a href="https://www.MDBootstrap.com"> MDBootstrap.com </a>
          </MDBContainer>
        </div>
      </MDBFooter>
    </body>
  );
}

export default Shoes;
