import React, { Component } from "react"
import RestaurantCard from "../components/restaurantCard"

class Restaurants extends Component {
	state = {
		postcode: "3021PX",
		search: "",
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
					"Minimale obstakels",
				],
				rating: 4,
				categories: [{}, {}, {}, {}],
			},
			{
				id: 2,
				name: "Vapiano",
				tags: ["Pizza, ", "Italiaans, ", "Pasta "],
				accessibility: [
					"Opstapjes",
					"Goede inrichting",
					"Contrast in Kleuren",
					"Werknemers goed ingelicht",
				],
				rating: 4,
				categories: [{}, {}, {}, {}],
			},
		],
	}

	onSearch = (e) => {
		this.setState({
			search: e.target.value.substr(0, 10),
		})
	}

	render() {
		let singleRestaurantcard = null

		let filteredRestaurant = this.state.restaurants.filter((restaurant) => {
			// let searchableContent = [
			// 	restaurant.tags.map((tag) => tag),
			// 	restaurant.name,
			// 	restaurant.accessibility
			// ]

			return restaurant.name.toLowerCase().indexOf(this.state.search) !== -1
		})

		// console.log(singleRestaurantcard)

		// for (const restaurant of this.state.restaurants) {
		// 	singleRestaurantcard = (
		// 		<RestaurantCard
		// 			key={restaurant.id}
		// 			entireRestaurant={restaurant}
		// 			name={restaurant.name}
		// 			options={restaurant.accessibility}
		// 			rating={restaurant.rating}
		// 			tags={restaurant.tags}
		// 		/>
		// 	)
		// 	console.log(singleRestaurantcard)
		// }
		this.state.restaurants.map((restaurant, index) => {
			singleRestaurantcard = (
				<RestaurantCard
					key={index}
					entireRestaurant={restaurant}
					name={restaurant.name}
					options={restaurant.accessibility}
					rating={restaurant.rating}
					tags={restaurant.tags}
				/>
			)
		})

		console.log(singleRestaurantcard)

		// this.state.restaurants.map(
		// 	(restaurant, index) =>
		// 		(singleRestaurantcard = (
		// 			<RestaurantCard
		// 				key={index}
		// 				entireRestaurant={restaurant}
		// 				name={restaurant.name}
		// 				options={restaurant.accessibility}
		// 				rating={restaurant.rating}
		// 				tags={restaurant.tags}
		// 			/>
		// 		))
		// )

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

				<hr className='solid' />

				<div className='searchRestaurant'>
					<input
						type='text'
						placeholder='&nbsp; Zoek naar jouw restaurant..'
						onChange={this.onSearch}
					/>
					<i className='material-icons'>search</i>
				</div>

				<div className='restaurantsWrapper'>{singleRestaurantcard}</div>
			</div>
		)
	}
}

export default Restaurants
