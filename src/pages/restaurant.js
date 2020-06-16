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
			<h1 className='restaurant-header'>{items.name}</h1>
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
				<Item name='name' ingredients={["HI", "hi", "hi"]} price={1.8} />
				<Item name='name' ingredients={["HI", "hi", "hi"]} price={1.8} />
				<Item name='name' ingredients={["HI", "hi", "hi"]} price={1.8} />
				<Item name='name' ingredients={["HI", "hi", "hi"]} price={1.8} />
				<Item name='name' ingredients={["HI", "hi", "hi"]} price={1.8} />
				<Item name='name' ingredients={["HI", "hi", "hi"]} price={1.8} />
			</div>
		</>
	)
}

export default Restaurant
