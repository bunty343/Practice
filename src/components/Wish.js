import React from 'react'

//function Wish() {
    //return <h1>Hello Bunty</h1>
//}

const Wish = (props) => {
   console.log(props) 
    return(
        <div>
        <h1>
        Hellow {props.name} a.k.a {props.heroName} 
        </h1>
    {props.children}
    </div> 
    )   
}
export default Wish