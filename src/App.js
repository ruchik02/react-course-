import React from "react";
import Joke from "./Joke";
function App() {
    return(
    <div>
        <Joke
        // contact={{
            questions='what is your name ?'
            answer='My name is ruchika'
        // }}
        />
         <Joke
        // contact={{
            questions='How are you ?'
            answer='I am fine '
        // }}
        />
         <Joke
        // contact={{
            questions='what about you ?'
            answer='I am also good'
        // }}
        />
         <Joke
        // contact={{
            questions='Do u like ice-cream?'
            answer='Yes I like ice-cream'
        // }}
        />
         <Joke
        // contact={{
            questions='Have u ate breakfast'
            answer='Yes i have eaten'
        // }}
        />
    </div>
    )
 }
export default App;