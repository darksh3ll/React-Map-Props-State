import React, { Component } from 'react';
import { Window, TitleBar, Text } from 'react-desktop/macOs';

import './App.css';
import Users from "./components/Users";

class App extends Component {
  render() {
    return (
        <Window
            chrome
            height="100%"
            padding="10px"
        >
            <TitleBar title="React" controls/>
            <Users/>
        </Window>
    );
  }
}

export default App;
