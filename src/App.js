import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super();

    this.state =  { imageURL: [] }
  }

  componentDidMount() {
    fetch('/comparison')
      .then(res => res.json())
      .then(images => this.setState({
         imageURL: [...this.state.imageURL, images]

      }))
      // .bind(this);
      console.log(this.state)
  }

  render() {

    return (
      <div className="App">
        <img id='firstImage' className='image' src={this.state.imageURL} />
        <img id='secondImage' className='image' src={this.state.imageURL} />
      </div>
    );
  }
 }

export default App;
