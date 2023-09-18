import React from "react";
import { Slideshow } from "../components/Slideshow";
import {
	ArticleContainer,
	ArticleContent,
	ArticleTitle,
	ButtonContainer,
	CallToAction,
	MainContainer,
} from "./homeStyle";

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
						<div>
							<a href="/sortering">Se affaldsguide</a>
							<a href="/">Bestil storskrald</a>
						</div>
					</ArticleContent>
					<div>
						<img src="" alt="" srcset="" />
					</div>
				</ArticleContainer>
				<ArticleContainer>
					<div></div>
					<div></div>
				</ArticleContainer>
			</MainContainer>
		</>
	);
};
