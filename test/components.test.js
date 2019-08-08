/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { expect } from 'chai';
import 'jsdom-global/register';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import Main from '../client/components/Main';
import Home from '../client/components/Home';
import Products from '../client/components/Products';
import store from '../client/store';


enzyme.configure({ adapter: new Adapter() });
const history = createMemoryHistory();

describe('React componnents', () => {
  let component;
  describe('Main', () => {
    it('should render correctly', () => {
      component = mount(
        <Provider store={store}>
          <Router history={history}>
            <Main getProducts={() => {}} onLoad={() => {}} />
          </Router>
        </Provider>,
      );

      expect(component.find('main')).to.have.length(1);
    });
  });

  describe('Home', () => {
    it('should render correctly', () => {
      component = mount(
        <Provider store={store}>
          <Router history={history}>
            <Home />
          </Router>
        </Provider>,
      );

      expect(component.find('ProductSlider')).to.have.length(1);
    });
  });

  describe('Products', () => {
    beforeEach('Create <Products />', async () => {
      component = await mount(
        <Provider store={store}>
          <Router history={history}>
            <Products products={['product']} getSingleProd={() => {}} />
          </Router>
        </Provider>,
      );
    });

    it('renders elements based on what gets placed on the state', async () => {
      await expect(component.find('button')).to.have.length(1);
    });
  });
});
