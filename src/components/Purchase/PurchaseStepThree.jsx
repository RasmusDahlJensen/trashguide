import React from "react";
import { ConfirmationContainer } from "../../pages/purchaseStyle";
import { Checkmark } from "react-checkmark";

export const PurchaseStepThree = ({ productData }) => {
	return (
		<main>
			<ConfirmationContainer>
				<p>
					Hej {productData.fullname}, mange tak for dit køb, vi har sendt
					fakturaen til din email på {productData.email}
				</p>
				<figure>
					<Checkmark size="128px" color="green" />
				</figure>
			</ConfirmationContainer>
		</main>
	);
};
