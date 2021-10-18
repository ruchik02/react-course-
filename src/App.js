import React from 'react';
function App(){
    const name='Ruchika';
    const loading=false;
    if(loading){
        return <h1>Loading!</h1>
    }
    return(
        <div>
            <p>Hello {name}</p>
        </div>
    )
}
export default App;