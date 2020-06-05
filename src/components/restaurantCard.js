import React from "react"
import { NavLink } from "react-router-dom"

const RestaurantCard = (props) => {
	console.log(props.entireRestaurant.id)
	return (
		<div className='single-restaurant-card'>
			<h2>{props.name}</h2>
			<span>{props.tags}</span>
			<ul>
				<li>{props.options}</li>
			</ul>
			<NavLink
				to={{
					pathname: `/restaurant/${props.entireRestaurant.id}`,
                    state: props.entireRestaurant
				}}
			>
				<span>Zie menu.</span>
			</NavLink>
		</div>
	)
}

export default RestaurantCard
