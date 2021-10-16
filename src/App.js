import React from "react";
import  ReactDOM  from "react";
import Card from './Card';
function App(){
    return(
        <div className="contacts">
            <Card 
            contact={{
                imgUrl:"https://i.pinimg.com/originals/02/e8/60/02e8601a9c05a8540e7fba11c3d7bf0b.jpg",
            name:" kitten",
            phone:"8494489488",
            email:"hey!"
            }}
            
            />
            <Card
            contact={{
                imgUrl:"https://i.pinimg.com/originals/02/e8/60/02e8601a9c05a8540e7fba11c3d7bf0b.jpg",
                name:" kitten",
                phone:"8494489488",
                email:"hey!"
            }}
            />
            <Card
            contact={{
                imgUrl:"https://i.pinimg.com/originals/02/e8/60/02e8601a9c05a8540e7fba11c3d7bf0b.jpg",
            name:" kitten",
            phone:"8494489488",
            email:"hey!"
            }}
            />
            <Card
            contact={{
                imgUrl:"https://i.pinimg.com/originals/02/e8/60/02e8601a9c05a8540e7fba11c3d7bf0b.jpg",
                name:" kitten",
                phone:"8494489488",
                email:"hey!"
            }}
            />

         </div>  

            
    )
}
export default App;

