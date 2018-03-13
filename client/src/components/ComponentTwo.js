import React, { Component } from 'react';

class ComponentTwo extends Component {
  constructor(props){
    super(props);
    this.state = {
      firstStateMethod: ""
    }
  }
  render() {
    return(
      <div>
      <h1> This is the Second Page of the Template</h1>
      </div>
    )
  }
}

export default ComponentTwo;
