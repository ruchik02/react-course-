import React from "react";
function Header(){

    const firstName="Ruchika";
    const lastName="Sharma";
    return(
    <h1 className="navbar">Hello { `${firstName} ${lastName} `}</h1>
    );
}
export default Header;