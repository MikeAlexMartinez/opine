import React from 'React';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

import Tweet from './Tweet';

const TweetList = ({ tweets }) =>
  <div className='tweet-list'>
    <ul>
      {tweets.length > 0
        ? tweets.map((tweet) =>
          <li key={tweet.id} >
            <NavLink to={`/tweet/${tweet.id}`}>
              <Tweet {...tweet} />
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

function mapStateToProps ({ tweets }) {
  return {
    tweets
  };
}

export default connect(mapStateToProps)(TweetList);
