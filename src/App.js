import React from 'react'
import firebase from './firebase'
import Navigation from './Navigation'


class App extends React.Component  {
  state = {
    authenticated: false,
  };
  componentDidMount() {
    firebase.auth().onAuthStateChanged((authenticated) => {
      authenticated
      ?this.setState(() => ({
        authenticated: true,
      }))
      : this.setState(() => ({
          authenticated: false,
      }));
    });

  }

  render() {
    return <Navigation class="container-fluid" authenticated={this.state.authenticated} />;

  }
}
export default App;
