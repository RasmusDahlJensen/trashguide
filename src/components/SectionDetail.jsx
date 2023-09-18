import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { DetailContainer, TitleContainer } from "./sectionDetailStyle";

export const SectionDetail = () => {
	const { section_id } = useParams();
	const [productData, setProductData] = useState();
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await axios.get(
					`http://localhost:3000/section/${section_id}?incl_types=true`
				);
				const data = response.data;

				setProductData(data);
				setLoading(false);
				console.log(data);
			} catch (error) {
				console.error("Error fetching data: ", error);
				setLoading(false);
			}
		};

		fetchData();
	}, [section_id]);

	return (
		<DetailContainer>
			{loading ? (
				<p>Loading...</p>
			) : (
				<>
					<TitleContainer color={productData.color}>
						<h1>{productData.title}</h1>
						<img src={productData.filepath} alt="" />
					</TitleContainer>
					<div></div>
				</>
			)}
		</DetailContainer>
	);
};
