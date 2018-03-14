import React from 'react';
import App from './App';
import { mount, shallow } from 'enzyme';
import { waitForState } from 'enzyme-async-helpers';

describe('App', () => {
  it('it fetches an image URL on mount and sets it to state',  async () => {
  //arrange
    const fs = require("fs");
    const mockData = fs.readFileSync('./public/mockData.json');
    console.log(mockData)

    global.fetch = jest.fn(async () => ({
      ok: true,
      status: 200,
      json: async () => ({
        mockData
      })
    }))

    const app = mount(<App />);

  //act
    await waitForState(app, state => state.imageURL.length > 0)

  //assert
    expect(app.instance().state.imageURL.length).toBe([mockData].length)
  })
})
