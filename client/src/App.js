import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import Card from './Card';
import bb8 from './bb8.jpeg';

class App extends Component {
  state = { results: [], comments: [], comment: '' }

  componentDidMount() {
    // Make a request for a user with a given ID 
    const getPeople = () => {
      console.log('Get people just got called');
      axios.get('https://swapi.co/api/people')
        .then(res => {
          console.log('res-->', res);      
          const results = res.data.results
          this.setState({ results })
          console.log(results);
        })
        .catch(res => {
          console.log(res);
        })
    }

    //Call get people
    getPeople();
  }

  // getCharacter = (url) => {
  //   console.log(url);
  //   axios.get(String(url))
  //     .then(res => {
  //       const results = res.data.results
  //       console.log(results);
  //     })
  //     .catch(res => {
  //       console.log(res);
  //     })
  // }

  render() {
    const { results, person, comments } = this.state;
    const { postComment, getCharacter } = this.props;
    return (
      <div className = "container">
        <img src={bb8}/>
        <h1>Star Wars</h1>
        <Card results={results} />
      </div>
    );
  }
}

export default App;
