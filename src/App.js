import React, { Component } from 'react';
import { getComparison } from './api-service.js';

class App extends Component {
  constructor() {
    super();
    this.state = { }

    this.submitChoice = this.submitChoice.bind(this)
  }

  componentDidMount() {
    getComparison()
    .then(images => {
        this.setState(images)
      })
  }

  submitChoice(choice) {
    fetch('/comparison', {
      method: 'POST',
      body: JSON.stringify(this.state),
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    }).then(res => res.json())
    .catch(error => console.error('Error:', error))
    .then(response => console.log('Success:', response));
  }


  render() {

    return (
      <div className="App">
        <img id='firstImage' className='image' src={this.state.firstImageUrl} />
        <img id='secondImage' className='image' src={this.state.secondImageUrl} />
        <button id='buttonOption1' className='button' onClick={this.submitChoice}>Select Option 1</button>
      </div>
    );
  }
}

export default App;
