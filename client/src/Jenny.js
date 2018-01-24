//from index.js server
const express = require('express'),
bodyParser = require('body-parser'),
cors = require('cors'),
app = express(),
port = 3001,
libraryCtrl = require('./podcasts');
app.use(bodyParser.json());
app.get('/api/podcasts', libraryCtrl.read);
app.post('/api/podcasts', libraryCtrl.create);
app.put('/api/podcasts', libraryCtrl.update);
app.delete('/api/podcasts/:_id', libraryCtrl.delete);
app.listen(port, () => 
console.log(`Listening on port ${port}`
));

//controler_for server

let podcastLibrary = []
function generate(count) {
    let _sym = "abcdefghijklmnopqrstuvwxyz1234567890";
    let str = ''
 
    for(let i = 0; i < count; i++) {
        str += _sym[parseInt(Math.random() * (_sym.length))];
    }
    return str
 };
 function addIdtoItem(pod){
    return{...pod, _id: generate(10)};
 };
module.exports = {
    create: function(req, res){
        podcastLibrary.push(addIdtoItem(req.body))
        res.status(200).send('Podcast added')        
    },
    read: function(req, res){
        res.status(200).send(podcastLibrary)
    },
    update: function(req, res){
        console.log(req.body)
        podcastLibrary = req.body.display
        res.status(200).send('Updated from server')
    },
    delete: function(req, res){
        let newLibrary = podcastLibrary.filter((pod) => pod._id !== req.params._id)
        podcastLibrary = newLibrary
        res.status(200).send('Podcast deleted')
    }
};

//frontend

import React, { Component } from 'react';
import DisplayTile from './DisplayTile';
import axios from 'axios';
import Header from './Header';
import './DisplayPodcast.css';
class DisplayPodcast extends Component {
  constructor(props) {
    super(props)
    this.state = {
      display: [],
      author: '',
      title: '',
      category: ''
    }
    this.handleUpdateAuthor = this.handleUpdateAuthor.bind(this)
    this.handleUpdateTitle = this.handleUpdateTitle.bind(this)    
    this.handleUpdateCategory = this.handleUpdateCategory.bind(this)
    this.handleUpdate = this.handleUpdate.bind(this)
  }
  componentDidMount() {
    axios.get('/api/podcasts').then((resp) => {
      this.setState({ display: resp.data }, ()=>console.log(this.state.display) )
    });
  }
  handleUpdate(){
    console.log('update click')
    axios.put('/api/podcasts', {display:this.state.display}).then((resp) => {
      console.log(resp)
    })
  }
  handleUpdateAuthor(event, updatedAuthor){
    console.log(event)
    console.log(updatedAuthor)
    let displayCopy = this.state.display.splice(0)
    console.log(displayCopy);
    displayCopy.map(function(val,i){
      if(val._id == event){
        val.author = updatedAuthor
        return val
      }
      return val
    })
    
    this.setState({display:displayCopy}, ()=>console.log(this.state.display))
  }
  handleUpdateTitle(event, updatedTitle){
    console.log(event)
    console.log(updatedTitle)
    let displayCopy = this.state.display.splice(0)
    console.log(displayCopy);
    displayCopy.map(function(val,i){
      if(val._id == event){
        val.title = updatedTitle
        return val
      }
      return val
    })
    
    this.setState({display:displayCopy}, ()=>console.log(this.state.display))
  }
  handleUpdateCategory(event, updatedCategory){
    console.log(event)
    console.log(updatedCategory)
    let displayCopy = this.state.display.splice(0)
    console.log(displayCopy);
    displayCopy.map(function(val,i){
      if(val._id == event){
        val.category = updatedCategory
        return val
      }
      return val
    })
    
    this.setState({display:displayCopy}, ()=>console.log(this.state.display))
  }
  
  render() {
    if (this.state.display === []) {
      return <div>Empty Podcast Library</div>
    } else {
      return (
        <div>
        <Header />
        <h2>Library</h2>
          <div className="displayPodcast">
            {this.state.display.map((val) => {
              return (
                <div key={val._id} className='tile'>
                  {/* <img src="" alt=""/> */}
                  <DisplayTile handleUpdateAuthor = {this.handleUpdateAuthor}val={val} 
                  DisplayTile handleUpdateTitle = {this.handleUpdateTitle}val={val}
                  DisplayTile handleUpdateCategory = {this.handleUpdateCategory}val={val}
                  handleUpdate = {this.handleUpdate}/>
                </div>
              )
            })}
          </div>
        </div>
      );
    }
  }
}
export default DisplayPodcast;

//frontend

import React, { Component } from 'react';
function Header(props) {
    return (
      <div>
    <h2>Podcast</h2>
      </div>
    );
  }
export default Header;

//frontend

import React, { Component } from 'react';
import AddPodcast from './AddPodcast';
import DisplayPodcast from './DisplayPodcast.js';
function Rapper(props) {
    return (
      <div>
      <AddPodcast />
      <DisplayPodcast />
      </div>
    );
  }
export default Rapper;

//frontend

import React, { Component } from 'react';
import Rapper from './Components/Rapper';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import Header from './Components/Header';
// import podcastLibrary from './server/podcasts';
// import {add} from './server/podcasts';
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      podcasts: []
    }
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Share and Discover Podcasts</h1>
        </header>
      <Rapper />
      </div>
    );
  }
}
export default App;
