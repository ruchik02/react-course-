import React from "react";
class Product extends React.Component{
    constructor(){
        super();
        this.state={
            price:999,
            title:'mobile phone',
            qty:1,
            img:''
        }
        // this.increaseQuantity=this.increaseQuantity.bind(this);
    }
    increaseQuantity= ()=>{
        // this.state.qty+=1;
        this.setState({
            qty:this.state.qty + 1 
            // title:"Some new title"
        });
        //form 2 setState if prev state required use this form 

        // this.setState((prevState)=>{
        //     return{
        //         qty: prevState.qty + 1
        //     }
           
        // });
        this.setState({
            qty:this.state.qty-1
        });

        console.log('this',this.state);
    }

    
    render(){
        const{price,title,qty}=this.state;
        return (
          <div className="product">
              <div className="left">
                 <img style={styles.image} />
              </div>
              <div className="right">
                  <div style={{color:'red',fontSize:'30px'}}>{title}</div>
                  <div style={{color:'#777'}}>Rs:{price}</div>
                  <div style={{color: '#777'}}>Qty:{qty}</div>
                  <div className="cart-item-actions">
                      <img
                      alt="increase"
                      className="actions-icons"
                      src="https://cdn-icons-png.flaticon.com/512/1828/1828926.png"
                      onClick={this.increaseQuantity}
                       />
                        <img
                      alt="decrease"
                      className="actions-icons"
                      src="https://cdn-icons-png.flaticon.com/512/66/66889.png"
                       />
                        <img
                      alt="delete"
                      className="actions-icons"
                      src="https://cdn-icons.flaticon.com/png/512/484/premium/484611.png?token=exp=1634539846~hmac=6378d8d64a61cccc0fe0f8bde8e30058"
                       />



                  </div>
              </div>

          </div>
        );

    }
}
const styles={
        image:{
            height:110,
            width:110,
            borderRadius:4,
            background:'#ccc'
        }
    }
export default Product;