import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super();

    this.state =  { imageURLs:  [] }
  }

  componentDidMount() {
    fetch('/comparison')
      .then(res => res.json())
      .then(images => this.setState({
         imageURLs: [...this.state.imageURLs, images]
      }))
      // .bind(this);
      console.log(this.state)
  }

  submitChoice(data) {
    fetch('/comparison', {
      method: 'POST',
      body: JSON.stringify([...this.state.imageURLs, data]),
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
        <img id='firstImage' className='image' src={this.state.imageURLs[0]} />
        <img id='secondImage' className='image' src={this.state.imageURLs[1]} />
        <button id='buttonOption1' className='button' onClick={this.submitChoice(this.state.imageURLs[0])}>Select Option 1</button>
      </div>
    );
  }
 }

export default App;
