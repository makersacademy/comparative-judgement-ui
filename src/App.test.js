import React from 'react';
import App from './App';
import { mount } from 'enzyme';

describe('App', () => {
  const wrapper = mount(<App />);
  const inst = wrapper.instance()

  it('loads with no image', () => {
    expect(inst.state.imageUrl).toEqual('')
  })

  it('updates state with image url', () => {
    inst.setImage()
    expect(inst.state.imageUrl).toEqual('./jester.jpeg');
  })
})
