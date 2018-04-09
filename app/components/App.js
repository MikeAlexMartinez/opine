import React, { Component } from 'react';
import { connect } from 'react-redux';
require('../../stylesheets/components/App.scss');

import { handleButtonPress } from '../actions/buttonPress'; 

export class App extends React.Component {
  handleClick = (e) => {
    e.preventDefault();
    this.props.dispatch(handleButtonPress(1)); 
  }
  render() {
    const { count } = this.props;
    return (
      <div>
        <div className="app">
          You have pushed me {count || 0} times!
        </div>
        <button onClick={this.handleClick}>Push Me!</button>
      </div>
    );
  }
}

function mapStateToProps ({ buttonPresses }) {
  return {
    count: buttonPresses.count
  };
}

export default connect(mapStateToProps)(App);
