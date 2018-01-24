import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Card from './Card';
import bb8 from './bb8.jpeg';

class App extends Component {
  state = { results: [], comments: [], comment: '' }
  

    componentDidMount(){
    const getUser = () =>{
      console.log('Get users just got called')
      axios.get('http://localhost:3001/api/users')
      .then(res => {
        console.log('res--->',res);
        const results = res.data.results
        console.log('The results--->',results)
      })
      getUser();
    }
    }
   handleChange(user) {
     axios.put()
   }

  render() {
  
    return (
      <div className="container">
        <img src={bb8} />
        <h1>Star Wars Lover</h1>

      </div>
    );
  }
}

export default App;
