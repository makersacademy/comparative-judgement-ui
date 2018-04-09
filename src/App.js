import React, { Component } from 'react';
import { getComparison } from './api-service.js';
import './App.css';


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

  submitChoice() {
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
      <div className="App ">

        <div className="flex-container center">
          <div className="flex-item"> <img id='firstImage' className='image' src={this.state.firstImageUrl} />
<div className="flex-container center">
       <button id='buttonOption1' className='button' onClick={this.submitChoice}>Select Option 1</button>
</div>
        </div>

          <div className="flex-item" ><img id='secondImage' className='image' src={this.state.secondImageUrl} />
<div className="flex-container center">
        <button id='buttonOption2' className='button center' onClick={this.submitChoice}>Select Option 2</button>
</div>
        </div>
        </div>


      </div>
    );
  }
}

export default App;
