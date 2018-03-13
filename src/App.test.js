import React from 'react';
import App from './App';
import { mount } from 'enzyme';

describe('App', () => {
  it('loads with no image', () => {
    const wrapper = mount(<App />);
    const inst = wrapper.instance()

    expect(inst.state.imageUrl).toEqual('')
  })

  it('updates state with image url', () => {
    const wrapper = mount(<App />);
    const inst = wrapper.instance()

    inst.setImage()
    expect(inst.state.imageUrl).toEqual('./jester.jpeg');
  })
})
