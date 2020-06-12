import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDispalay from './SeasonDisplay'

// Functional Component:
// const App = () => {
//   window.navigator.geolocation.getCurrentPosition(
//     position => console.log(position),
//     err => console.log(err)
//   );

//   return <div>Latitude:</div>
// };

//Class Based Component:

class App extends React.Component {
  state = { lat: null, errorMessage: ''}

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      // position => console.log(position),
      position => this.setState({ lat: position.coords.latitude }),
      err => this.setState({ errorMessage: err.message })
     );
  }

  // React says we have to define render!!
  render() {
    if(this.state.errorMessage && !this.state.lat) {
    return <div>Error: {this.state.errorMessage}</div>
    }

    if(!this.state.errorMessage && this.state.lat) {
    return <SeasonDispalay lat={this.state.lat}/>
    }

    return <div>Loading!</div>
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));
