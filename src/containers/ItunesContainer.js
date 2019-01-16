import React, { Component } from 'react';
import DisplayData from '../component/DisplayData'

class ItunesContainer extends Component{
  constructor(props){
  super(props);
  this.state = {
               itunesData: []
               };
}

componentDidMount(){
  fetch('https://itunes.apple.com/gb/rss/topsongs/limit=20/json')
  .then(response => response.json())
    .then(data => this.setState({itunesData: data}))
    }

  render(){
    return(
      <DisplayData data={this.state.itunesData}/>
    )
  }
}

export default ItunesContainer;
