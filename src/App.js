import React, { Component } from 'react';
import png1 from './assets/dice1.png';
import png2 from './assets/dice2.png';
import png3 from './assets/dice3.png';
import png4 from './assets/dice4.png';
import png5 from './assets/dice5.png';
import png6 from './assets/dice6.png';

const images = [png1, png2, png3, png4, png5, png6];

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      png: png1,
    };
  }

  btnClick() {
    this.setState({ png: images[Math.floor(Math.random() * 6)] });
  }

  render() {
    return (
      <div>
        <img alt="dice" src={this.state.png}></img>
        <div className="button-container">
          <button className='btn btn-primary' onClick={() => this.btnClick()}>Roll!</button>
        </div>
      </div>
    );
  }
}
