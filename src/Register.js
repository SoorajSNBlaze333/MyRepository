import React from 'react';
import firebase from './firebase';
class Register extends React.Component {
  state = {
    email: '',
    password: '',
    error: null
  };
  handleInputChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    const { email, password } = this.state;
    firebase.auth().createUserWithEmailAndPassword(email, password).then((user) => {
      this.props.history.push('/');
      this.display();
    })
      .catch((error) => {
        this.setState({ error: error });
      });
  };
  display() {
    return (window.alert("User created Successfully"));
  }
  render() {
    const { email, password, error } = this.state;
    return (
      <div>
        <div>Register</div>
        {
          error ? (
            <div>{error.message}</div>
          ) : null}
        <form style={{ left:'50%'}} onSubmit={this.handleSubmit}>
          <input style={{ width: '50%', position: 'relative', left: '25%' }}  class="form-control" type="text" name="email" placeholder="Email" value={email} onChange={this.handleInputChange} />
          <input style={{ width: '50%', position: 'relative', left: '25%' }}  class="form-control" type="password" name="password" placeholder="Password" value={password} onChange={this.handleInputChange} />
          <button style={{ width: '50%', position: 'relative', left: '25%',background:'rgb(0, 153, 153)',color:'white' }} class="btn btn-default btn-primary" children="Register" />
        </form>
      </div>
    )
  }
}
export default Register;