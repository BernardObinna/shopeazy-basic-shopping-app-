import React, { Component } from "react";

class Cart extends Component {
  render() {
    const { imageURL, title, price, removeFromCart } = this.props;
    return (
      <div className="col-sm-3 center product">
        <img src={imageURL} alt="" />
        <p>{price}</p>
        <p>{title}</p>
        <button
          className="waves-effect waves-light btn-small mt-auto"
          onClick={removeFromCart}
        >
          Remove from Cart
        </button>
      </div>
    );
  }
}
export default Cart;
