import React from 'react';
import App from './App';
import { render, mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { waitForState } from 'enzyme-async-helpers';
import ApiService from './api-service';
import sinon from 'sinon';

describe('App', () => {

  it('it should call the API service getcomparison method on mount', () => {

    const spy = jest.spyOn(ApiService, 'getComparison');

    const wrapper = mount(<App />);

    expect(spy).toHaveBeenCalled();
    spy.mockClear()

  })

  it('should set state with two image URLs on mount', () => {

    sinon.stub(ApiService, 'getComparison')
    .callsFake(() => Promise.resolve({firstImageUrl: './jester.jpeg', secondImageUrl: './Minstrel.jpg'}))

    const app = mount(<App />)

    return Promise.resolve(app)
      .then((app) => {
        return app.update()
            })

      .then(() => {
        console.log(app.state())

        expect(app.state().firstImageUrl).toEqual('./jester.jpeg')
      })

  })


  it('should call the submitChoice method on click', () => {

  //arrange
    const spy = jest.spyOn(App.prototype, 'submitChoice');
    const app = shallow(<App />);

  //act
    const button = app.find('#buttonOption1')
    button.simulate('click');

  //assert
    expect(spy).toBeCalled();
    spy.mockClear()

  })

})
