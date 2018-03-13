import React from 'react';
import App from './App';
import { mount, shallow } from 'enzyme';

describe('App', () => {
  const wrapper = mount(<App />);
  const inst = wrapper.instance()

  it('loads with no image', () => {
    expect(inst.state.imageUrl).toEqual('')
  })

  it('updates state with image url', () => {
    // arrange
    const appInstance = shallow(<App />);

    // act
    appInstance.find('button').simulate('click');

    // assert
    expect(appInstance.find('img').prop('src')).toEqual('./jester.jpeg');
  })
})
