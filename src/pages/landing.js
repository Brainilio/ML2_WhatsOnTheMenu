import React from "react"
import SearchBar from "../components/searchbar"

const Landing = () => {
	return (
		<div className='landingWrapper'>
			<span className='landing-title'>What's on the Menu?</span>
			<SearchBar />
			<span className='about-title'>Over ons</span>
			<div className='aboutWrapper'>
				<p>
					What's on the menu is een applicatie speciaal ontwikkeld voor mensen
					met een visuele beperking. Door gebruik te maken van deze applicatie
					kunnen blinden en slecht ziende mensen het menu inlezen van vele
					restaurants in de buurt.
				</p>
			</div>
		</div>
	)
}

export default Landing
