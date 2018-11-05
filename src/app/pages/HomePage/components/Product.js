import React, { Component } from "react";

import { NavLink } from "react-router-dom";
class Product extends Component {
  render() {
    const { imageUrl, price, title, addToCart, getIndiPro } = this.props;
    return (
      <div className="col-sm-3 center product">
        <NavLink to="/individualProduct" onClick={getIndiPro}>
          {" "}
          <img src={imageUrl} alt="" />{" "}
        </NavLink>
        <p className="">{price}</p>
        <p>{title}</p>
        <button
          className="waves-effect waves-light btn-small mt-auto"
          onClick={addToCart}
        >
          Add To Cart
        </button>
      </div>
    );
  }
}
export default Product;
