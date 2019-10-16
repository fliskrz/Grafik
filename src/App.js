import './App.css';
import React, {Component} from 'react';
import Grafik from './components/Grafik';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pswd: 'warszawianka',
      auth: false
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    let password = e.currentTarget.querySelector('.password');
    let alert = e.currentTarget.querySelector('.alert');

    if(password.value === this.state.pswd){
      password.value = '';
      alert.innerHTML = '';
      this.setState({
        auth: true
      })
    }else{
      alert.innerHTML = 'Dobre haselo poprosze';
      password.value = '';
    }
  }

  render() {
    if(this.state.auth){
      return (
        <div className='app'>
          <Grafik />
        </div>
      )
    }else{
      return (
        <div className='app'>
          <form onSubmit={this.handleSubmit}>
            <h1>Dawaj haselo</h1>
            <input className='password' type='password' name='password' required></input>
            <input type='submit' value='Enter'></input>
            <p className='alert'></p>
          </form> 
        </div>
      )
    }
  }
}

export default App;
