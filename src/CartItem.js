import React from "react";
class CartItem extends React.Component{
    constructor(){
        super();
        this.state={
            price:999,
            title:'Phone',
            qty:1,
            img:"https://images.unsplash.com/photo-1529778873920-4da4926a72c2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTF8fHxlbnwwfHx8fA%3D%3D&w=1000&q=80"
     }
     
    }
    render(){
        return(
            <div>
                <div className="app1">

                  <img src="https://images.unsplash.com/photo-1529778873920-4da4926a72c2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTF8fHxlbnwwfHx8fA%3D%3D&w=1000&q=80" 
                  style={styles.images}
                  />
                  <div>
                    phone
                </div>
                <div>
                    Rs:1000
                </div>
                <div>
                    qty:1
                </div>
                </div>
                

            </div>
        )
    }
}
const styles={
    images:{
       height: 160,
       width:160,
       borderRadius:3,
      url:'https://images.unsplash.com/photo-1529778873920-4da4926a72c2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTF8fHxlbnwwfHx8fA%3D%3D&w=1000&q=80'
    }
}
export default CartItem;