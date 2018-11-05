import React, { Component } from "react";

class IndividualProduct extends Component {
  render() {
    const { showIndiPro, addToCart } = this.props;
    return (
      <div className="col-sm-3 center product individualProduct">
        <img src={showIndiPro.imageUrl} alt="" />
        <p className="">{showIndiPro.price}</p>
        <p>{showIndiPro.title}</p>
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
export default IndividualProduct;
