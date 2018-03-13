import React from 'react';
import App from './App';
import { mount } from 'enzyme';

describe('App', () => {
  it('sets the image URL', () => {
    const wrapper = mount(<App />);
    const inst = wrapper.instance()
    inst.setImage()
    expect(inst.state.imageUrl).toEqual('./jester.jpeg');
  })
})
