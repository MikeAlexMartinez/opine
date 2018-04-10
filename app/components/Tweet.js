import React, { Component } from 'react';
import { connect } from 'react-redux';

class Tweet extends Component {
  render() {
    return (
      <div className='tweet'>
        <div className='tweet-avatar-container'>

        </div>
        <div className='tweet-content'>

        </div> 
      </div>
    );
  }
}



function mapStateToProps({ authedUser, users }) {
  return {
    authedUser,
    users
  };
}

export default connect(mapStateToProps)(Tweet);
