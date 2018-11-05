import React, { Component } from "react";
import tick from "../../../tick.png";

class CheckoutPage extends Component {
  state = {
    firstName: null,
    lastName: null,
    address: null,
    email: null,
    phone: null
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.placeOrder(this.state);

    this.submitted = !this.submitted;
    this.forceUpdate();
  };

  confirmSubmit = state => {
    const st = state;
    const dis = <p>{st}</p>;

    return dis;
  };

  submitted = false;

  render() {
    return (
      <div className="container">
        {this.submitted ? (
          <div className="container acknowledgement">
            <div className="center">
              <img
                id="ackImage"
                className="center responsive-img"
                src={tick}
                alt=""
              />
            </div>
            <p className="center acknowledgement">
              Dear {this.state.firstName} {this.state.lastName} your order has
              been placed.
            </p>
            <p className="center  acknowledgement">Thank you. </p>
          </div>
        ) : (
          <div className="container">
            <h2 className="center grey-text text-darken-2">Checkout</h2>
            <form action="" onSubmit={this.handleSubmit}>
              <label htmlFor="firstName">Firstname</label>
              <input
                type="text"
                name="firstName"
                onChange={this.handleChange}
              />
              <label htmlFor="lastName">Lastname</label>
              <input type="text" name="lastName" onChange={this.handleChange} />
              <label htmlFor="address">Address</label>
              <input type="text" name="address" onChange={this.handleChange} />
              <label htmlFor="email">Email</label>
              <input type="email" name="email" onChange={this.handleChange} />
              <label htmlFor="phone">Phone NO</label>
              <input name="phone" onChange={this.handleChange} />
              <input
                id="submit"
                type="submit"
                className="waves-effect waves-light btn-small"
              />
            </form>
          </div>
        )}
      </div>
    );
  }
}

export default CheckoutPage;
