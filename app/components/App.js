import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { handleInitialData } from '../actions/shared';
require('../../stylesheets/components/App.scss');

import LoadingBar from 'react-redux-loading';

import NavBar from './NavBar';
import Home from './Home';
import CreateTweet from './CreateTweet';
import TweetDetail from './TweetDetail';

class App extends Component {
  componentDidMount () {
    this.props.dispatch(handleInitialData());
  }
  render() {
    return (
      <Router>
        <Fragment>
          <LoadingBar />
          <div className='container'>
            <NavBar />
            {this.props.loading === true
              ? <p>Loading...</p>
              : <div>
                <Route path='/' exact component={Home} />
                <Route path='/new' component={CreateTweet} />
                <Route path='/tweet/:tweetId' component={TweetDetail} />
              </div>
            }
          </div>
        </Fragment>
      </Router>
    );
  }
}

App.propTypes = {
  loading: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired
};

function mapStateToProps ({ authedUser }) {
  return {
    loading: authedUser === null
  };
}

export default connect(mapStateToProps)(App);
