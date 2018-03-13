import React from 'react';
import App from './App';
import { mount, shallow } from 'enzyme';

describe('App', () => {

  it('updates state with first image url', () => {
    // arrange
    const appInstance = shallow(<App />);

    // act
    appInstance.find('button').simulate('click');

    // assert
    expect(appInstance.find('#firstImage').prop('src')).toEqual('./jester.jpeg');
  })


  it('updates state with second image url', () => {
    // arrange
    const appInstance = shallow(<App />);

    // act
    appInstance.find('button').simulate('click');

    // assert
    expect(appInstance.find('#secondImage').prop('src')).toEqual('./minstrel.jpg');
  })

})
