import React, { Component } from 'react';

class ComponentOne extends Component {
  constructor(props){
    super(props);
    this.state = {
      firstStateMethod: ""
    }
  }
  render() {
    return(
      <div>
      <h1> This is the First/Landing Page of the Template</h1>
      </div>
    )
  }
}

export default ComponentOne;
