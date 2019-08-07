import React from "react";
import "./home.css";
import { Icon } from "antd";
import { Carousel } from "antd";
import { Link } from "react-router-dom";
import "antd/dist/antd.css";
import logo from "../../../src/logo.png";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import { Divider } from "antd";

function Home() {
  return (
    <body>
      <div className="top-nav-bar">
        <div className="search-box">
          <img src={logo} className="logo" alt="logo" />
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
          <a href="#welcome-section">SHOES</a>
          <a href="#welcome-section">CLOTHING</a>
          <a href="#welcome-section">ACCESSORIES</a>
        </div>
      </div>
      <Carousel autoplay>
        <div>
          <img
            className="img-carousel"
            src="https://fashionista.com/.image/t_share/MTQwODY4MjI3NDI4MjYzMjg4/hp-business-casualjpg.jpg"
            alt="img1"
          />
        </div>
        <div>
          <img
            className="img-carousel"
            src="https://freedesignfile.com/upload/2017/06/Fashion-summer-women-and-cosmetics-and-accessories-HD-picture-07.jpg"
            alt="img1"
          />
        </div>
        <div>
          <img
            className="img-carousel"
            src="https://www.abc.net.au/cm/rimage/9997840-16x9-xlarge.jpg?v=5"
            alt="img1"
          />
        </div>
        <div>
          <img
            className="img-carousel"
            src="https://mcdn.wallpapersafari.com/medium/49/46/2MEySe.jpg"
            alt="img1"
          />
        </div>
      </Carousel>
      <div>
        <p className="text1">
          <strong>Most Popular</strong>
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
                    src="https://ae01.alicdn.com/kf/HTB1NnNNajDuK1Rjy1zjq6zraFXaC/Hot-2018-Glitter-Lips-Liquid-Lipstick-lot-Women-Brand-Makeup-Waterproof-Blue-Purple-Wine-Red-Color.jpg"
                  />
                  <img
                    class="pic-2"
                    src="https://ae01.alicdn.com/kf/HTB1NnNNajDuK1Rjy1zjq6zraFXaC/Hot-2018-Glitter-Lips-Liquid-Lipstick-lot-Women-Brand-Makeup-Waterproof-Blue-Purple-Wine-Red-Color.jpg"
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
                  />
                  <img
                    class="pic-2"
                    src="https://cdn.shopify.com/s/files/1/0082/2358/8410/products/2019-New-Arrival-women-pumps-shoes-Pointed-Toe-Office-Women-s-Shoes-Fashion-Solid-Flock-High_1000x.jpg?v=1549197481"
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
                  />
                  <img
                    class="pic-2"
                    src="http://images-global.kikuu.com/upload-productImg-35942228091947723.jpg"
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
                  />
                  <img
                    class="pic-2"
                    src="https://ae01.alicdn.com/kf/HTB1ya0kFmBYBeNjy0Feq6znmFXaE/Casual-Summer-Chiffon-Dress-Women-Clothes-2018-Sexy-Floral-Short-Beach-Dresses-Korean-Elegant-Vestido-De.jpg"
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
      <div>
        <h1 className="text1">Just For You</h1>
        <p className="text3">Handpicked pieces for your personal style</p>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-3 col-sm-6">
            <div className="product-grid9">
              <div className="product-image9">
                <a href="#">
                  <img
                    class="pic-1"
                    src="http://bestjquery.com/tutorial/product-grid/demo3/images/img-3.jpeg"
                  />
                  <img
                    class="pic-2"
                    src="http://bestjquery.com/tutorial/product-grid/demo3/images/img-4.jpeg"
                  />
                </a>
                <a href="#" className="fa fa-search product-full-view" />
              </div>
              <div className="product-content">
                <ul className="rating">
                  <li className="fa fa-star" />
                  <li className="fa fa-star" />
                  <li className="fa fa-star" />
                  <li className="fa fa-star" />
                  <li className="fa fa-star" />
                </ul>
                <h3 className="title">
                  <a href="#">Women's Yellow Top</a>
                </h3>
                <div className="price"> $12.60 - $40.53</div>
                <a className="add-to-cart" href="">
                  VIEW PRODUCTS
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="product-grid9">
              <div className="product-image9">
                <a href="#">
                  <img
                    class="pic-1"
                    src="http://bestjquery.com/tutorial/product-grid/demo3/images/img-1.jpeg"
                  />
                  <img
                    class="pic-2"
                    src="http://bestjquery.com/tutorial/product-grid/demo3/images/img-2.jpeg"
                  />
                </a>
                <a href="#" className="fa fa-search product-full-view" />
              </div>
              <div className="product-content">
                <ul className="rating">
                  <li className="fa fa-star" />
                  <li className="fa fa-star" />
                  <li className="fa fa-star" />
                  <li className="fa fa-star disable" />
                  <li className="fa fa-star disable" />
                </ul>
                <h3 className="title">
                  <a href="#">Women's Designer Top</a>
                </h3>
                <div className="price"> $10.20 </div>
                <a className="add-to-cart" href="">
                  VIEW MORE
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="product-grid9">
              <div className="product-image9">
                <a href="#">
                  <img
                    class="pic-1"
                    src="http://bestjquery.com/tutorial/product-grid/demo3/images/img-5.jpeg"
                  />
                  <img
                    class="pic-2"
                    src="http://bestjquery.com/tutorial/product-grid/demo3/images/img-6.jpeg"
                  />
                </a>
                <a href="#" className="fa fa-search product-full-view" />
              </div>
              <div className="product-content">
                <ul className="rating">
                  <li className="fa fa-star" />
                  <li className="fa fa-star" />
                  <li className="fa fa-star" />
                  <li className="fa fa-star" />
                  <li className="fa fa-star" />
                </ul>
                <h3 className="title">
                  <a href="#">Women's Designer Top</a>
                </h3>
                <div className="price"> $12.60 - $40.53</div>
                <a className="add-to-cart" href="">
                  VIEW PRODUCTS
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="product-grid9">
              <div className="product-image9">
                <a href="#">
                  <img
                    class="pic-1"
                    src="http://bestjquery.com/tutorial/product-grid/demo3/images/img-7.jpeg"
                  />
                  <img
                    class="pic-2"
                    src="http://bestjquery.com/tutorial/product-grid/demo3/images/img-8.jpeg"
                  />
                </a>
                <a href="#" className="fa fa-search product-full-view" />
              </div>
              <div className="product-content">
                <ul className="rating">
                  <li className="fa fa-star" />
                  <li className="fa fa-star" />
                  <li className="fa fa-star" />
                  <li className="fa fa-star" />
                  <li className="fa fa-star" />
                </ul>
                <h3 className="title">
                  <a href="#">Women's Designer Top</a>
                </h3>
                <div className="price"> $12.60 - $40.53</div>
                <a className="add-to-cart" href="">
                  VIEW PRODUCTS
                </a>
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
                    src="http://bestjquery.com/tutorial/product-grid/demo9/images/img-1.jpg"
                  />
                  <img
                    class="pic-2"
                    src="http://bestjquery.com/tutorial/product-grid/demo9/images/img-2.jpg"
                  />
                </a>
                <a href="#" className="fa fa-search product-full-view" />
              </div>
              <div className="product-content">
                <ul className="rating">
                  <li className="fa fa-star" />
                  <li className="fa fa-star" />
                  <li className="fa fa-star" />
                  <li className="fa fa-star" />
                  <li className="fa fa-star" />
                </ul>
                <h3 className="title">
                  <a href="#">Women's Shirt</a>
                </h3>
                <div className="price"> $12.60 - $40.53</div>
                <a className="add-to-cart" href="">
                  VIEW PRODUCTS
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="product-grid9">
              <div className="product-image9">
                <a href="#">
                  <img
                    class="pic-1"
                    src="http://bestjquery.com/tutorial/product-grid/demo4/images/img-7.jpg"
                  />
                  <img
                    class="pic-2"
                    src="http://bestjquery.com/tutorial/product-grid/demo4/images/img-8.jpg"
                  />
                </a>
                <a href="#" className="fa fa-search product-full-view" />
              </div>
              <div className="product-content">
                <ul className="rating">
                  <li className="fa fa-star" />
                  <li className="fa fa-star" />
                  <li className="fa fa-star" />
                  <li className="fa fa-star disable" />
                  <li className="fa fa-star disable" />
                </ul>
                <h3 className="title">
                  <a href="#">Women's Blazer</a>
                </h3>
                <div className="price"> $10.20 </div>
                <a className="add-to-cart" href="">
                  READ MORE
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="product-grid9">
              <div className="product-image9">
                <a href="#">
                  <img
                    class="pic-1"
                    src="http://bestjquery.com/tutorial/product-grid/demo5/images/img-1.jpg"
                  />
                  <img
                    class="pic-2"
                    src="http://bestjquery.com/tutorial/product-grid/demo5/images/img-2.jpg"
                  />
                </a>
                <a href="#" className="fa fa-search product-full-view" />
              </div>
              <div className="product-content">
                <ul className="rating">
                  <li className="fa fa-star" />
                  <li className="fa fa-star" />
                  <li className="fa fa-star" />
                  <li className="fa fa-star" />
                  <li className="fa fa-star" />
                </ul>
                <h3 className="title">
                  <a href="#">Women's Black Top</a>
                </h3>
                <div className="price"> $12.60 - $40.53</div>
                <a className="add-to-cart" href="">
                  VIEW PRODUCTS
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="product-grid9">
              <div className="product-image9">
                <a href="#">
                  <img
                    className="pic-1"
                    src="http://bestjquery.com/tutorial/product-grid/demo6/images/img-7.jpg"
                  />
                  <img
                    className="pic-2"
                    src="http://bestjquery.com/tutorial/product-grid/demo6/images/img-8.jpg"
                  />
                </a>
                <a href="#" className="fa fa-search product-full-view" />
              </div>
              <div className="product-content">
                <ul className="rating">
                  <li className="fa fa-star" />
                  <li className="fa fa-star" />
                  <li className="fa fa-star" />
                  <li className="fa fa-star" />
                  <li className="fa fa-star" />
                </ul>
                <h3 className="title">
                  <a href="#">Women's Top</a>
                </h3>
                <div className="price"> $12.60 - $40.53</div>
                <a className="add-to-cart" href="">
                  VIEW PRODUCTS
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

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

export default Home;
