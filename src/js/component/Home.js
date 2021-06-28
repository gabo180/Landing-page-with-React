import React from "react";

//importing component by name
import { Card } from "./Card";
import { Jumbotron } from "./Jumbotron";
import { Navbar } from "./Navbar";
//importing component as default
import FooterNavigation from "./Footer";

//create your first component

export function Home() {
	const generateCards = () => {
		const cards = [];
		const card = (
			<div className="col">
				<Card />
			</div>
		);
		for (let i = 0; i < 4; i++) {
			cards.push(card);
		}
		return cards;
	};

	return (
		<div className="container">
			<Navbar />
			<div className="">
				<Jumbotron />
				<div className="row">{generateCards()}</div>
			</div>
			<div>
				<FooterNavigation />
			</div>
		</div>
	);
}
