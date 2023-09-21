import {
	ContentContainer,
	FlexContainer,
	StepsContainer,
} from "../../pages/purchaseStyle";
import step from "../../assets/stepTwo.svg";

export const PurchaseStepTwo = ({
	navigateToStepThree,
	productData,
	setProductData,
}) => {
	const productSubmit = async (e) => {
		e.preventDefault();

		try {
			const response = await fetch("http://localhost:3000/orders", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(productData),
			});
			navigateToStepThree(productData);
		} catch (error) {
			console.error("Error posting review:", error);
		}
	};

	const handleProducts = (name, value) => {
		setProductData({
			...productData,
			[name]: value,
		});
	};

	return (
		<>
			<FlexContainer>
				<StepsContainer>
					<figure>
						<img src={step} alt="step tracker" />
					</figure>
				</StepsContainer>
				<ContentContainer>
					<div>
						<p>Trin 2</p>
						<h2>Hvor skal den levers?</h2>
						<p>
							Tation argumentum et usu, dicit viderer evertitur te has. Eu
							dictas concludaturque usu, facete detracto patrioque an per,
							lucilius pertinacia eu vel.
						</p>
					</div>
					<div>
						<form onSubmit={productSubmit}>
							<input
								type="text"
								id="fullname"
								name="fullname"
								placeholder="Navn"
								value={productData.fullname}
								onChange={(e) => handleProducts(e.target.name, e.target.value)}
								required
							/>

							<input
								type="text"
								id="address"
								name="address"
								placeholder="adresse"
								value={productData.address}
								onChange={(e) => handleProducts(e.target.name, e.target.value)}
								required
							/>
							<input
								type="number"
								id="zipcode"
								name="zipcode"
								placeholder="Postnummer"
								value={productData.zipcode}
								onChange={(e) => handleProducts(e.target.name, e.target.value)}
								required
							/>
							<input
								type="text"
								id="city"
								name="city"
								placeholder="By"
								value={productData.city}
								onChange={(e) => handleProducts(e.target.name, e.target.value)}
								required
							/>
							<input
								type="email"
								id="email"
								name="email"
								placeholder="Email"
								value={productData.email}
								onChange={(e) => handleProducts(e.target.name, e.target.value)}
								required
							/>
							<input
								type="number"
								id="phone"
								name="phone"
								placeholder="Telefon"
								value={productData.phone}
								onChange={(e) => handleProducts(e.target.name, e.target.value)}
								required
							/>
							<div>
								<button type="submit">Videre</button>
							</div>
						</form>
					</div>
				</ContentContainer>
			</FlexContainer>
		</>
	);
};
