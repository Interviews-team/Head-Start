import React, { Component } from "react";
import AhmadGhzawi from './components/AhmadGhzawi'
import AhmadNsour from './components/AhmadNsour'
import Mohammad from './components/Mohammad'
import Hani from './components/Hani'

class App extends Component {
  render() {
    return (
      <>
        <h1>HELLO</h1>
        <AhmadNsour />
        <AhmadGhzawi />
        <Mohammad />
        <Hani />
      </>
    );
  }
}

export default App;
