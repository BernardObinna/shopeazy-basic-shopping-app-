import React, { Component } from "react";
import Product from "./components/Product";

class HomePage extends Component {
  render() {
    const { products, addToCart, getIndiPro } = this.props;
    return (
      <div className="container">
        <div className="row">
          {products.map((product, index) => (
            <Product
              key={product.id}
              imageUrl={product.imageUrl}
              title={product.title}
              price={product.price}
              addToCart={() => addToCart(index)}
              getIndiPro={() => getIndiPro(product)}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default HomePage;
