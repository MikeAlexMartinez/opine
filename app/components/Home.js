import React from 'react';

import Heading from './Heading';
import TweetList from './TweetList';

const Home = () =>
  <div className='home'>
    <Heading title='Your Timeline' />
    <TweetList />
  </div>;

export default Home;
