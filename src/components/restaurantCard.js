import React from "react"
import { NavLink } from "react-router-dom"

const RestaurantCard = (props) => {
	console.log(props.entireRestaurant.id)

	let stars = []
	for (let i = 0; i < props.rating; i++) {
		stars.push(<i className='material-icons'>star_rate</i>)
	}

	return (
		<div className='single-restaurant-card'>
			<div className='restaurant-card-content-wrapper'>
				<div className='restaurant-card-header'>
					<div className='restaurant-card-title'>
						<h2 className='restaurant-card-title-name'>{props.name}</h2>
						<span className='restaurant-card-tags'>{props.tags}</span>
					</div>
					<div className='restaurant-card-rating'>
						{" "}
						{stars.map((star) => star)}
					</div>
				</div>

				<ul>
					{props.options.map((option) => {
						return (
							<li>
								<i
									style={{ fontSize: 28, textAlign: "center" }}
									className='material-icons'
								>
									check
								</i>{" "}
								{option}
							</li>
						)
					})}
				</ul>

				<NavLink
					to={{
						pathname: `/restaurant/${props.entireRestaurant.id}`,
						state: props.entireRestaurant,
					}}
				>
					<div className='restaurant-card-footer'>
						<span>Zie menu.</span>
						<i className='material-icons'>navigate_next</i>
					</div>
				</NavLink>
			</div>
		</div>
	)
}

export default RestaurantCard
