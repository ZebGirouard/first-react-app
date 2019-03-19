import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './Button';

class App extends Component {
  state = {
    yourHealth: 40,
    opponentHealth: 10,
    wines: [],
  }

  attackOpponent = () => {
    this.setState({
      opponentHealth: this.state.opponentHealth - 1,
    })
  }

  printWines = () => {
    fetch('https://den-super-crud.herokuapp.com/wines')
      .then((response) => response.json())
      .then((json) => {
        console.log(json)
        this.setState({
          wines: json.wines,
        })
      })
  }

  healMe = () => {
    // DONT DO THIS
    //this.state.something = somethingElse
    // DO THIS INSTEAD
    this.setState({
      yourHealth: this.state.yourHealth + 1,
    })
  }

  render() {
    const pageName = 'my page'
    const healText = 'Heal Me!'
    const attackText= 'Attack!'
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <ul>{this.state.wines.map((wine) => {
              return (
                <li>{wine.name}</li>
              )
            })}
          </ul>
          <p>
            Welcome to {pageName}!
          </p>
          <p>Your health is {this.state.yourHealth}</p>
          <p>Your opponent's health is {this.state.opponentHealth}</p>
          <Button
            buttonText={healText}
            clickHandler={this.healMe}
          />
          <Button
            buttonText={attackText}
            clickHandler={this.attackOpponent}
          />
          <Button
            buttonText="get wines"
            clickHandler={this.printWines}
          />
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
