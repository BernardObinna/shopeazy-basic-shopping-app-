import React, { Component } from "react";
import axios from "axios";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import CartPage from "./pages/CartPage";
import Checkout from "./pages/CheckoutPage/index";
import IndividualProduct from "./pages/HomePage/components/individualProduct";

import { BrowserRouter, Route } from "react-router-dom";

class ShoppingApp extends Component {
  state = {
    products: [],
    cart: [],
    cost: 0,
    selected: []
  };

  componentDidMount = async () => {
    const { data: response } = await axios.get(
      "https://ds-shopeazy-server.herokuapp.com/product"
    );
    // const { data: response } = await axios.get("https://shopeazy-backend.herokuapp.com/product");
    this.setState({ products: response });
  };

  handleAddToCart = index =>
    this.setState({
      cart: [...this.state.cart, this.state.products[index]]
    });

  handleAddToCart2 = index =>
    this.setState({
      cart: [...this.state.cart, this.state.selected]
    });

  placeOrder = async userData => {
    const order = {
      ...userData,
      cart: [...this.state.cart]
    };

    const {
      data: { message, error }
    } = await axios.post(
      "https://ds-shopeazy-server.herokuapp.com/order",
      // "https://shopeazy-backend.herokuapp.com/api/v1/order",
      order
    );
    if (error) console.error(error);
    else console.log(message);
  };

  handleRemoveFromCart = index => {
    this.setState({
      cart: [
        ...this.state.cart.slice(0, index),
        ...this.state.cart.slice(index + 1)
      ]
    });
  };

  handlegetIndiPro = product => {
    this.setState({
      selected: product
    });
  };

  render() {
    const { products, cart } = this.state;

    return (
      <BrowserRouter>
        <div>
          <Navbar cartSize={cart.length} />

          <Route
            exact
            path="/"
            render={() => (
              <HomePage
                products={products}
                addToCart={this.handleAddToCart}
                getIndiPro={this.handlegetIndiPro}
              />
            )}
          />
          <Route
            exact
            path="/CartPage"
            render={() => (
              <CartPage
                cartContent={cart}
                removeFromCart={this.handleRemoveFromCart}
              />
            )}
          />

          <Route
            exact
            path="/CheckoutPage"
            render={() => <Checkout placeOrder={this.placeOrder} />}
          />

          <Route
            exact
            path="/individualProduct"
            render={() => (
              <IndividualProduct
                showIndiPro={this.state.selected}
                addToCart={this.handleAddToCart2}
              />
            )}
          />
        </div>
      </BrowserRouter>
    );
  }
}

export default ShoppingApp;
