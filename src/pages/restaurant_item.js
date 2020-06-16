import React from "react"

const Item = (props) => {
	return (
		<div className='restaurant-item-card'>
			<span className='item_name'>
				<strong>{props.name}</strong>
			</span>
			<span className='item_ingredient'>
				Ingredienten: {props.ingredients.map((ingredient) => ` ${ingredient} `)}
			</span>
			<span className='item_price'>Prijs: ${props.price}</span>
		</div>
	)
}

export default Item
