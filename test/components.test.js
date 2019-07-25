import React from "react";
import enzyme, { shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { expect } from "chai";
import "jsdom-global/register";

enzyme.configure({ adapter: new Adapter() });

import Main from "../client/components/Main";
import Home from "../client/components/Home";
import Products from "../client/components/Products";

import { Provider } from "react-redux";
import { Router } from "react-router-dom";
import store from "../client/components/redux/store.js";

import { createMemoryHistory } from "history";
const history = createMemoryHistory();

describe("React componnents", () => {
	let component;
	describe("Main", () => {

		it("should render correctly", () => {

      component = mount(
				<Provider store={store}>
					<Router history={history}>
						<Main />
					</Router>
				</Provider>
			);

			expect(component.find("main")).to.have.length(1);
		});
	});

	describe("Home", () => {
		it("should render correctly", () => {
      component = mount(
				<Provider store={store}>
					<Router history={history}>
						<Home />
					</Router>
				</Provider>
			);

			expect(component.find("ProductSlider")).to.have.length(1);
		});
	});

	describe("Products", () => {
		it("should render correctly", () => {
      component = mount(
				<Provider store={store}>
					<Router history={history}>
						<Products />
					</Router>
				</Provider>
			);

			expect(component.find("div")).to.have.length(1);
		});
	});
});
