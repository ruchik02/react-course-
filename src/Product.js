import React from "react";
const Product=(props)=>{
    // constructor(){
    //     this.state={
    //         price:999,
    //         title:'mobile phone',
    //         qty:1,
    //         img:'',
    //     }
    // }
    // testing(){
    //     const promise=new Promise((resolve,reject)=>{
    //         setTimeout(()=>{
    //             resolve('done')
    //         },5000)
    //     });
    //     promise.then(()=>{
    //         //setState acts like a synchronous call
    //         this.setState({qty:this.state.qty+10});
    //         this.setState({qty:this.state.qty+10});
    //         this.setState({qty:this.state.qty+10});
    //         console.log('state',this.state);
    //     });
    // }
    
    // increaseQuantity= ()=>{
       
    //      //form 2 setState if prev state required use this form 
    //     this.setState((prevState)=>{
    //         return{
    //             qty: prevState.qty + 1
    //         }
    //     },()=>{
    //         console.log('this',this.state);
    //     });
    //     this.setState((prevState)=>{
    //         return{
    //             qty: prevState.qty + 1
    //         }
    //     });
    //     this.setState((prevState)=>{
    //         return{
    //             qty: prevState.qty + 1
    //         }
    //     });
    //     this.setState((prevState)=>{
    //         return{
    //             qty: prevState.qty + 1
    //         }
    //     });
        
    // }

    // decreaseQuantity= ()=>{
    //     const {qty} =this.state;
    //     if(qty===0){
    //         return;
    //     }
    //     this.setState((prevState)=>{
    //         return{
    //             qty: prevState.qty - 1
    //         }
           
    //     });
    //     console.log('this',this.state);
    // }
    // handleClick = () => {
    //     this.setState({ qty: 2 }, () => console.log(this.state.qty));
    //     this.setState({ qty: 5 }, () => console.log(this.state.qty));
    // }
    
       // console.log('this.props',this.props);
        const{price,title,qty}=props.product;
        const {product,onIncreaseQuantity,onDecreaseQuantity,onDeleteProduct}=props;
        return (
          <div className="product">
              {/* {this.props.jsx} */}
              <div className="left">
                 <img style={styles.image} src={product.img} />
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
                    //   onClick={this.increaseQuantity}
                    onClick={()=>onIncreaseQuantity(product)}
                       />
                        <img
                      alt="decrease"
                      className="actions-icons"
                      src="https://cdn-icons-png.flaticon.com/512/66/66889.png"
                      onClick={()=>onDecreaseQuantity(product)}
                       />
                        <img
                      alt="delete"
                      className="actions-icons"
                      src="https://cdn-icons.flaticon.com/png/512/484/premium/484611.png?token=exp=1634539846~hmac=6378d8d64a61cccc0fe0f8bde8e30058"
                      onClick={()=> onDeleteProduct(product.id)}
                       />
                  </div>
              </div>

          </div>
        );

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