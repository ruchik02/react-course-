import React from "react";
class Product extends React.Component{
    
    render(){
        return (
          <div className="product">
              <div className="left">
                 <img style={styles.image} />
              </div>
              <div className="right">
                  <div style={{color:'red',fontSize:'30px'}}>Phone</div>
                  <div style={{color:'#777'}}>Rs 999</div>
                  <div style={{color: '#777'}}>Qty:1</div>
                  <div className="cart-item-actions">

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