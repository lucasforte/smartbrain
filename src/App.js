import React, {Component} from 'react';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import Rank from './components/Rank/Rank';
import './App.css';

const app = new Clarifai.App({
  apiKey: '5682ee28d8d944759dbd65fb9baf7680'
});

const particlesOptions = {
  particles: {
    number: {
      value: 180,
      density: {
        enable: true,
        value_area: 1000
      }
    }
  }
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
      imgUrl: ''
    }
  }

  onInputChange = (event) => {
    this.setState({input: event.target.value});
  }

  onButtonSubmit = () => {
    this.setState({imgUrl: this.state.input});
    app.models
      .predict(
      Clarifai.FACE_DETECT_MODEL,
        // URL
        this.state.input
      )
      .then(function(response) {
          // do something with response
          console.log(response);
          },
          function(err) {// there was an error
          
          }
      );
  }

  render() {
    return (
      <div className="App">
        <Particles className='particles'
          params={particlesOptions}
        />
        <Navigation />
        <Logo/>
        <Rank/>
        <ImageLinkForm 
          onInputChange={this.onInputChange} 
          onButtonSubmit={this.onButtonSubmit}
        />
        <FaceRecognition imgUrl={this.state.imgUrl}/>
      </div>
    );
  }
}

export default App;
