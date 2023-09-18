import React from "react";
import { Slideshow } from "../components/Slideshow";
import {
	ArticleButtonContainer,
	ArticleButtonOne,
	ArticleButtonTwo,
	ArticleContainer,
	ArticleContent,
	ArticleTitle,
	ButtonContainer,
	CallToAction,
	MainContainer,
} from "./homeStyle";

import articleOnePic from "../assets/articleOne.png";
import articleTwoPic from "../assets/articleTwo.png";

export const Home = () => {
	return (
		<>
			<section>
				<Slideshow />
				<CallToAction>
					<h2>Find og anmeld genbrugsstationer</h2>
					<ButtonContainer>
						<a href="/recycling">Find station</a>
						<a href="/login">Log ind</a>
					</ButtonContainer>
				</CallToAction>
			</section>
			<MainContainer>
				<ArticleContainer>
					<ArticleContent>
						<ArticleTitle>
							<h2>Din guide til sortering</h2>
						</ArticleTitle>
						<p>
							Her kan du se hvordan du skal sortere og hvad der skal i hvilke
							beholdere. Du får også tips og tricks til, hvordan du gør det nemt
							at sortere hjemme hos dig.
						</p>
						<ArticleButtonContainer>
							<ArticleButtonOne>
								<a href="/sortering">Se affaldsguide</a>
							</ArticleButtonOne>
							<ArticleButtonTwo>
								<a href="/">Bestil storskrald</a>
							</ArticleButtonTwo>
						</ArticleButtonContainer>
					</ArticleContent>
					<div>
						<img src={articleOnePic} alt="Sorting" srcset="" />
					</div>
				</ArticleContainer>
				<ArticleContainer>
					<div>
						<img src={articleTwoPic} alt="Containers" srcset="" />
					</div>
					<ArticleContent>
						<ArticleTitle>
							<h2>Bestil din nye affaldsbeholder</h2>
						</ArticleTitle>
						<p>
							when an unknown printer took a galley of type and scramble it to
							make a type specimen book. It has survived not only
						</p>
						<div>
							<ArticleButtonOne>
								<a href="/purchase">Bestil nu</a>
							</ArticleButtonOne>
						</div>
					</ArticleContent>
				</ArticleContainer>
			</MainContainer>
		</>
	);
};
