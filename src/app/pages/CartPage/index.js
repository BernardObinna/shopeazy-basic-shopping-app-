import React, { Component } from "react";
import Cart from "./Components/Cart";
import { NavLink } from "react-router-dom";

class CartPage extends Component {
  render() {
    const { cartContent, removeFromCart } = this.props;

    const total = cartContent.reduce(
      (accumulator, item) => accumulator + item.pricetag,

      0
    );

    return (
      <div className="container">
        <h3 className="center">
          Total:$
          {total}{" "}
        </h3>
        <div className="row">
          {cartContent.map((content, index) => (
            <Cart
              key={content.id}
              imageURL={content.imageUrl}
              title={content.title}
              price={content.price}
              removeFromCart={() => removeFromCart(index)}
            />
          ))}
        </div>

        <NavLink
          id="checkOutButton"
          className="waves-effect waves-light center btn-small  "
          to="/CheckoutPage"
        >
          Proceed to checkout
        </NavLink>
      </div>
    );
  }
}
export default CartPage;
