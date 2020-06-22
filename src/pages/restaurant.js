import React, { useState, useEffect } from "react"
import Item from "./restaurant_item"

const Restaurant = (props) => {
	useEffect(() => {
		setItems(props.location.state)
	}, [props.location.state])

	const [items, setItems] = useState([])

	console.log(items.categories)

	return (
		<>
			<p className='restaurant-header'>{items.name}</p>
			<ul className='restaurants-list-filter'>
				<li>
					<strong>Voorgerechten</strong>
				</li>
				<li>Hoofdgerechten</li>
				<li>Deserts</li>
				<li>Dranken</li>
			</ul>
			<hr className='solid' />
			<div className='restaurant-items-wrapper'>
				<Item
					name='Pizza Quatro Formaggio'
					ingredients={["Kaas", "Gluten", "Tomaat"]}
					price={10}
				/>
				<Item
					name='Pasta Bolognaise'
					ingredients={["Tomaat", "Gluten", "Vlees"]}
					price={12}
				/>
				<Item
					name='Pasta Carbonara'
					ingredients={["Varkensvlees", "Gluten", "Kaas"]}
					price={10}
				/>
				<Item
					name='Pizza Tuna'
					ingredients={["Vis", "Gluten", "Kaas"]}
					price={10}
				/>
				<Item
					name='Pizza Pepperoni'
					ingredients={["Vlees", "Tomatensaus", "Gluten"]}
					price={12}
				/>
				<Item
					name='Pizza Mozarella'
					ingredients={["Kaas", "Tomatensaus", "Gluten"]}
					price={8}
				/>
			</div>
		</>
	)
}

export default Restaurant
