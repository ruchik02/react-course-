import React from 'react';
import Navbar from './Navbar';
import Card from './Card';
class  App extends React.Component{
    constructor() {
        super();
        this.state = {
          products: [
            {
              price: 999,
              title: "mobile phone",
              qty: 1,
              img: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=580&q=80",
              id:1
            },
            {
              price: 9990,
              title: "Laptop",
              qty: 4,
              img: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1171&q=80",
              id:2
            },
            {
              price: 2999,
              title: "Watch",
              qty: 1,
              img: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1172&q=80",
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
    getCartCount=()=>{
        const {products}= this.state;
        let count=0;
        products.forEach((product)=>{
            count+=product.qty;
        })
        return count;
    }
    getCartPrice=()=>{
       const {products}=this.state;
       let total=0;
       products.map((product)=> {
        total= total + product.qty * product.price;
       })
       return total;
    }
      render () {
        const { products } = this.state;
        return (
          <div className="App">
            <Navbar count={this.getCartCount()} />
            <Card
              products={products}
              onIncreaseQuantity={this.handleIncreaseQuantity}
              onDecreaseQuantity={this.handleDecreaseQuantity}
              onDeleteProduct={this.handleDeleteProduct}
            />
            <div style={{fontSize:20,padding:10}}>
                TOTAL: {this.getCartPrice()}
            </div>
          </div>
        );
      }
}
  export default App;
    

