import React from "react";
const faker = require("faker");
import "../stylesheets/productSlider.scss";

const ProductSlider = () => {
	return (
		<div className="slider-container">
      <h2>FEATURED PRODUCT</h2>
			<div className="slides fade">
				<img src={faker.image.abstract()} />
				<h4>Description....</h4>
			</div>
		</div>
	);
};

export default ProductSlider;
