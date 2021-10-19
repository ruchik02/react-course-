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
  handleIncreaseQuantity=(product)=>{
      console.log('Hey!',product);
      const {products}=this.state;
      const index=products.indexOf(product);
      
      products[index].qty+=1;

      this.setState({
        //   products:products
        products
      })
  }
  handleDecreaseQuantity=(product)=>{
    console.log('Hey!',product);
    const {products}=this.state;
    const index=products.indexOf(product);
    if(products[index].qty===0)
      {
        return ;
      }
    products[index].qty-=1;

    this.setState({
      //   products:products
      products
    })
}
handleDeleteProduct=(id)=>{
  const {products}=this.state;
  const items=products.filter((item)=>item.id!==id);

  this.setState({
    products:items
  })

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
                onIncreaseQuantity={this.handleIncreaseQuantity}
                onDecreaseQuantity={this.handleDecreaseQuantity}
                onDeleteProduct={this.handleDeleteProduct}
              />
            )
          })}
        </div>
      );
    }
}

export default Card;
