import React from "react"

const Item = (props) => {
	return (
		<div className='restaurant-item-card'>
			<span className='item_name'>
				<strong>Spare Ribs</strong>
			</span>
			<span className='item_ingredient'>
				Ingredienten: Varkensvlees, BBQ_Saus
			</span>
			<span className='item_price'>Prijs: $8,00</span>
		</div>
	)
}

export default Item
