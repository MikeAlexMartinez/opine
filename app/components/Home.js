import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import Heading from './Heading';
import TweetList from './TweetList';

const Home = ({ tweets }) =>
  <div className='home'>
    <Heading title='Your Timeline' />
    <TweetList tweets={tweets} />
  </div>;

Home.propTypes = {
  tweets: PropTypes.array,
};

function mapStateToProps ({ tweets }) {
  return {
    tweets: Object.keys(tweets)
      .map((id) => tweets[id])
      .sort((a, b) => b.timestamp - a.timestamp)
  };
}

export default connect(mapStateToProps)(Home);
