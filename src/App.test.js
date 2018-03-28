import React from 'react';
import App from './App';
import { submitChoice } from './App';
import { render, mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { waitForState } from 'enzyme-async-helpers';
import ApiService from './api-service';
import sinon from 'sinon';
import fetchMock from 'fetch-Mock';

describe('App', () => {

  it('it should call the API service getcomparison method on mount', () => {

    const spy = jest.spyOn(ApiService, 'getComparison');

    const wrapper = mount(<App />);

    expect(spy).toHaveBeenCalled();
    spy.mockClear()

  })


  it('renders two images to the DOM on mount', () => {

    sinon.stub(ApiService, 'getComparison')
    .callsFake(() => Promise.resolve({firstImageUrl: './jester.jpeg', secondImageUrl: './Minstrel.jpg'}))

    const app = mount(<App />)

    return Promise.resolve(app)
      .then((app) => {
        return app.update()
            })

      .then(() => {
        console.log(app.state())

        const firstImage = app.find('#firstImage').html()
        const secondImage = app.find('#secondImage').html()

        expect(firstImage).toContain("src=\"./jester.jpeg\"")
        expect(secondImage).toContain("src=\"./Minstrel.jpg\"")
      })

  })

  it('should call the submitChoice method on clicking buttonOption1', () => {

    const spy = jest.spyOn(App.prototype, 'submitChoice');
    const app = shallow(<App />);

    const button = app.find('#buttonOption1')
    button.simulate('click');

    expect(spy).toBeCalled();
    spy.mockClear()

  })

  it('POSTs the imageURL data on clicking buttonOption1', async () => {

    const fs = require("fs");
    const mockData = fs.readFileSync('./public/mockPOSTData.json');

    const mockResponse = await fetchMock.mock({
        method: 'POST',
        matcher: '/comparison',
        response: {
          body: JSON.stringify(mockData),
          status: 400
        }
    })

    const app = mount(<App />);
    const button = app.find('#buttonOption1')
    button.simulate('click')

    expect(fetchMock.done()).toBeTruthy();
    expect(fetchMock.called()).toBeTruthy();
    expect(fetchMock.lastUrl()).toEqual('/comparison')
    expect(fetchMock.lastOptions().method).toEqual('POST')
    expect(fetchMock.lastOptions().headers.map).toEqual({'content-type': 'application/json'})
    expect(mockResponse.routes[0].response.body).toEqual(JSON.stringify(mockData));

    fetchMock.restore();

  })


  it('should call the submitChoice method on clicking buttonOption2', () => {

    const spy = jest.spyOn(App.prototype, 'submitChoice');
    const app = shallow(<App />);

    const button = app.find('#buttonOption2')
    button.simulate('click');

    expect(spy).toBeCalled();
    spy.mockClear()

  })

})
