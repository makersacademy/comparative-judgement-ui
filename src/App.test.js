import React from 'react';
import App from './App';
import { mount, shallow } from 'enzyme';
import { waitForState } from 'enzyme-async-helpers';
//
describe('App', () => {
  it('it fetches image URLs on mount and sets them to state',  async () => {
  //arrange
    const fs = require("fs");
    const mockGETData = fs.readFileSync('./public/mockGETData.json');

    global.fetch = jest.fn(async () => ({
      ok: true,
      status: 200,
      json: async () => ({
        mockGETData
      })
    }))

    const app = mount(<App />);

  //act
    await waitForState(app, state => state.imageURLs.length > 0)

  //assert
    expect(app.instance().state.imageURLs.length).toBe([mockGETData].length)
  })

  it('should call the submitChoice method on click' , () => {

  //arrange
    const mockSubmitChoice = jest.fn();
    const app = mount(<App submitChoice={ mockSubmitChoice } />);

  //act
    app.find('#buttonOption1').simulate('click');

  //assert
    expect(mockSubmitChoice).toHaveBeenCalledTimes(1);

  })

})
