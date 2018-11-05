import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import cart_image from "../../shopping_cart.png";
import home_image from "../../home_icon.png";

class Navbar extends Component {
  render() {
    const { cartSize } = this.props;

    return (
      <div>
        <nav>
          <div className="nav-wrapper">
            <h2 className="left black-text navlinkheader">ShopEazy</h2>
            <ul className="right ">
              <li>
                <NavLink to="/" className="navlink">
                  {" "}
                  <img src={home_image} alt="" />{" "}
                </NavLink>
              </li>
              <li>
                <NavLink to="/CartPage" className="black-text  navlink ">
                  {" "}
                  <img src={cart_image} alt="" /> {cartSize}
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
