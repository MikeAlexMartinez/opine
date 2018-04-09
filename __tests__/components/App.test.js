import React from 'react';
import { App } from '../../app/components/App';

import { shallow } from 'enzyme';

describe('<App />', () => {

  test('should render app', () => {

    const wrapper = shallow(<App />);
    expect(wrapper.contains(
      <div>
        <div className="app">
          You have pushed me 0 times!
        </div>
        <button onClick={f=>f}>Push Me!</button>
      </div>
    )).toEqual(true);
  });

});