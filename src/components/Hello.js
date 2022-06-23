import React from "react";

const Hello = () => {
    // return (
    // <div>
   // <h1>Hello Pankaj</h1>
  // </div>
 // )
    return React.createElement(
        'div',
        {id: 'hello', Class: 'dummyClass'},
        React.createElement('h1', null, 'Hello Pankaj')
        )
}

export default Hello