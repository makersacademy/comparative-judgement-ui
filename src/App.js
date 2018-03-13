import React, { Component } from 'react';


class App extends Component {
  constructor() {
      super();

      this.state = { imageUrl: '' };

      this.setImage = this.setImage.bind(this);
  }

  setImage() {
    this.setState(
      {
        firstImageUrl: './jester.jpeg',
        secondImageUrl: './minstrel.jpg',
      }

    );
  }

  render() {

    return (
      <div className="App">
        <img id='firstImage' className='image' src={this.state.firstImageUrl} />
        <img id='secondImage' className='image' src={this.state.secondImageUrl} />
        <button onClick={this.setImage}>Update image</button>
      </div>
    );
  }
 }

export default App;
