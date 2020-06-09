import React, { Component } from "react"
import RestaurantCard from "../components/restaurantCard"

class Restaurants extends Component {
	state = {
		postcode: "3021PX",
		restaurants: [
			{
				id: 1,
				name: "Beren",
				tags: ["All You Can Eat, ", "Barbecue, ", "Kip "],
				accessibility: [
					"Opstapjes",
					"Goede inrichting",
					"Contrast in Kleuren",
					"Werknemers goed ingelicht",
					"Minimale obstakels"
				],
				rating: 4,
				categories: [
					[
						{
							name: "Voorgerecht",
							items: [
								{
									name: "Spareribs",
									price: 8.0,
									ingredients: ["Varkensvlees", "BBQ Saus"]
								},
								{
									name: "Pizza",
									price: 8.0,
									ingredients: ["Varkensvlees", "BBQ Saus"]
								},
								{
									name: "Hamburger",
									price: 8.0,
									ingredients: ["Varkensvlees", "BBQ Saus"]
								},
								{
									name: "Carpaccio",
									price: 8.0,
									ingredients: ["Varkensvlees", "BBQ Saus"]
								}
							]
						}
					],
					[
						{
							name: "Hoofdgerecht",
							items: [{}]
						}
					],
					[
						{
							name: "Desert",
							items: [{}]
						}
					],
					[
						{
							name: "Drinken",
							items: [{}]
						}
					]
				]
			}
		]
	}

	render() {
		let singleRestaurantcard = null

		this.state.restaurants.map(
			(restaurant) =>
				(singleRestaurantcard = (
					<RestaurantCard
						key={restaurant.id}
						entireRestaurant={restaurant}
						name={restaurant.name}
						options={restaurant.accessibility}
						rating={restaurant.rating}
						tags={restaurant.tags}
					/>
				))
		)

		return (
			<div>
				<div className='restaurants-list-title'>
					<h1>Restaurants</h1>
					<span>{this.state.postcode}</span>
				</div>

				<ul className='restaurants-list-filter'>
					<li>
						<strong>Alles</strong>
					</li>
					<li>Turks</li>
					<li>Italiaans</li>
					<li>Surinaams</li>
					<li>Frans</li>
					<li>Indiaas</li>
					<li>Comfort</li>
					<li>Spareribs</li>
					<li>Patat</li>
					<li>
						<strong>Alle categorieen</strong>
					</li>
				</ul>

				<hr class='solid' />

				<div className='restaurantsWrapper'>{singleRestaurantcard}</div>
			</div>
		)
	}
}

export default Restaurants
