import React from "react";
import Product from "./Product";
// import Product from "./Product";
class Card extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [
        {
          price: 999,
          title: "mobile phone",
          qty: 1,
          img: "",
          id:1
        },
        {
          price: 9990,
          title: "Laptop",
          qty: 4,
          img: "",
          id:2
        },
        {
          price: 2999,
          title: "Watch",
          qty: 1,
          img: "",
          id:3
        },
      ],
    };
  }
  render() {
    const { products } = this.state;
    return (
        <div className="cart">
          {products.map((product) => {
            return (
              <Product
                product={product}
                key={product.id}
                jsx={<h1>Test</h1>}
              />
            )
          })}
        </div>
      );
    }
}

export default Card;
