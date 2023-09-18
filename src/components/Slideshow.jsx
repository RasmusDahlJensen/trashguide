import React, { useState, useEffect } from "react";
import {
	SlideshowContainer,
	SlideshowImage,
	ControlButton,
} from "./slideShowStyle";
import rightArrow from "../assets/Layout/icon-arrow-right.svg";
import leftArrow from "../assets/Layout/icon-arrow-left.svg";

export const Slideshow = () => {
	// State to track the current slide
	const [currentSlide, setCurrentSlide] = useState(0);

	// Array containing image URLs
	const images = [
		"http://localhost:3000/Assets/Images/slideshow/affald-skov-1.jpg",
		"http://localhost:3000/Assets/Images/slideshow/affald-strand-2.jpg",
		"http://localhost:3000/Assets/Images/slideshow/malerspande.jpg",
	];

	// Function to navigate to the next slide
	const nextSlide = () => {
		//Reset the slides when it gets to the last slide
		setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
	};

	// Function to navigate to the previous slide
	const prevSlide = () => {
		setCurrentSlide((prevSlide) =>
			prevSlide === 0 ? images.length - 1 : prevSlide - 1
		);
	};

	// Use useEffect to set an interval for automatic slideshow
	useEffect(() => {
		// Set an interval to call nextSlide every 1000 milliseconds (10 seconds)
		const interval = setInterval(nextSlide, 10000);

		// Cleanup function: Clear the interval when the component unmounts
		return () => clearInterval(interval);
	}, []);

	return (
		// SlideshowContainer: A container for the entire slideshow
		<SlideshowContainer>
			{/* ControlButton for navigating to the previous slide */}
			<ControlButton onClick={prevSlide} direction="prev">
				<img src={leftArrow} alt="" srcset="" />
			</ControlButton>
			{/* SlideshowImage: The image displayed in the slideshow */}
			<SlideshowImage
				src={images[currentSlide]}
				alt={`Slide ${currentSlide + 1}`}
			/>
			{/* ControlButton for navigating to the next slide */}
			<ControlButton onClick={nextSlide} direction="next">
				<img src={rightArrow} alt="" srcset="" />
			</ControlButton>
		</SlideshowContainer>
	);
};
