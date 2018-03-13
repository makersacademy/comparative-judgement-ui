import React, { Component } from 'react';


class App extends Component {
  constructor() {
      super();

      this.state = { imageUrl: '' };

      this.setImage = this.setImage.bind(this);
  }

  setImage() {
    this.setState({ imageUrl: './jester.jpeg'});
  }

  render() {

    return (
      <div className="App">
        <img className='image' src={this.state.imageUrl} />
        <button onClick={this.setImage}>Update image</button>
      </div>
    );
  }
 }

export default App;
