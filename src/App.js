import React, { Component } from 'react';
import apiService from './api-service';

class App extends Component {
  constructor() {
    super();
    this.state = {
      "firstImageUrl": "./jester.jpeg",
      "secondImageUrl": "./Minstrel.jpg",
      "chosenImageUrl": "./Minstrel.jpg"
    }

    this.submitChoice = this.submitChoice.bind(this)
  }

  componentDidMount() {
    apiService.getComparison()
    //fetch('/mockGETData.json')
      // .then(res => res.json())
      .then(images => {
        console.log(images);
        this.setState(images)
      })
      // .bind(this);
      console.log(this.state)
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
