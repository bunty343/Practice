import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Wish  from './components/Wish'
import Welcome from './components/Welcome'
import Hello from './components/Hello'
import Message from './components/Message';
class App extends Component {
  render() {
    return (
    <div className="App">
    <Message />
    // <Wish name="Aaj" heroName="kya kiya">
    // <p>This is children props</p>
    // </Wish>
    // <Wish name="Kal" heroName="kya karogey" />
    // <button>Action</button>
    // <Wish  name="Parso" heroName="kuch nahi karoge" />
    // <Hello />
    </div>
  );
}
}
export default App;
