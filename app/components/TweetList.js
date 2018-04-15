import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
require('../../stylesheets/components/TweetList.scss');

import Tweet from './Tweet';

const TweetList = ({ tweets }) =>
  <div className='tweet-list'>
    <ul>
      {tweets.length > 0
        ? tweets.map((tweet) =>
          <li key={tweet.id} >
            <NavLink to={`/tweet/${tweet.id}`}>
              <Tweet tweetid={tweet.id} />
            </NavLink>
          </li>
        )
        : <p>No Tweets found!</p>
      }
    </ul>
  </div>;

TweetList.propTypes = {
  tweets: PropTypes.array,
};

export default TweetList;
