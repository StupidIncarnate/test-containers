import React, { Component } from 'react';
import styled from 'styled-components';
import logo from './logo.svg';
import './App.css';
import moment from 'moment';

const Title = styled.h1`
  font-size: 1.3em;
  text-align: center;
  color: palevioletred;
`;

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            serverMessage: null
        }
    }

    componentDidMount(): void {

    }
	render() {
    return (
      <div className="App">
        <Title>Mine</Title>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
              State Says:
          </p>
          <div>{moment(new Date()).format("YYYY MMMM DD")}</div>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
	          Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
