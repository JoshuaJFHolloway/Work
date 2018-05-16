import React from 'react';
import { shallow } from 'enzyme';
import App from '../components/App';

describe('App', () => {
  const app = shallow(<App/>);

  it('renders correctly', () => {
    expect(app).toMatchSnapshot();
  });

  it('renders a Logo component', () => {
    expect(app.find('Logo').exists()).toBe(true);
  });

  describe('Initializes state successfully', () =>{
    it('initializes results that include the event.json and images', () => {
      expect(app.state('results')).toHaveProperty("event.areas-covered");
    });
  });

  describe('Props successfully passing down to the Logo component', () =>{
    it('passes this.state.images.logo', () => {
      expect(app.find('Logo').prop('logo'))
    });
  });

});