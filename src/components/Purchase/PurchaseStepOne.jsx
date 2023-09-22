import React from "react";
import {
	Card,
	CardContainer,
	ContentContainer,
	FlexContainer,
	StepsContainer,
} from "../../pages/purchaseStyle";
import step from "../../assets/stepOne.svg";

//Destructure the props
export const PurchaseStepOne = ({
	containerData,
	selectedContainerId,
	handleContainerSelection,
	navigateToStepTwo,
}) => {
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
						<p>Trin 1</p>
						<h2>Vælg type</h2>
						<p>
							Tation argumentum et usu, dicit viderer evertitur te has. Eu
							dictas concludaturque usu, facete detracto patrioque an per,
							lucilius pertinacia eu vel.
						</p>
					</div>
					<CardContainer>
						{containerData.map((container) => (
							<Card
								key={container.id}
								//When a card is clicked we grab the ID and put it in a state in the parent file
								onClick={() => handleContainerSelection(container.id)}
								//Whichever card has its ID saved will have a border
								className={selectedContainerId === container.id ? "active" : ""}
							>
								<img
									src={`http://localhost:3000/assets/images/icons/${container.icon_filename}`}
									alt="Container Icon"
									draggable="false"
								/>
								<p>{container.name}</p>
							</Card>
						))}
					</CardContainer>

					<div>
						{/* Clicking the button will advance the form to step 2 */}
						<button onClick={navigateToStepTwo}>Videre</button>
					</div>
				</ContentContainer>
			</FlexContainer>
		</>
	);
};
