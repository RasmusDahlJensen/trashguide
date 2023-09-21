import React from "react";

export const PurchaseStepThree = ({ productData }) => {
	console.log(productData);
	return (
		<div>
			Hej {productData.fullname} du har købt {productData.container_id}
			vi har sendt faktura til {productData.email}
		</div>
	);
};
