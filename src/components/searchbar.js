import React, { Component } from "react"
import { NavLink } from "react-router-dom"

class Searchbar extends Component {
	state = {
		postcode: null
	}

	addPostCode = (e) => {
		this.setState({
			postcode: e.target.value
		})
	}

	render() {
		return (
			<div className='landingSearchBarWrapper'>
				<span>
					Vul hieronder uw postcode in, zodat wij restaurants bij u in de buurt
					kunnen vinden.
				</span>
				<div className='landingSearchBarInput'>
					<button className='locationButton'>
						<i className='material-icons'>location_on</i>
					</button>
					<input
						type='text'
						placeholder='&nbsp; Bijvoorbeeld 3028 PX.. of Rotterdam'
						onChange={this.addPostCode}
					/>
					<NavLink
						to={{
							pathname: "/restaurants",
							locationProps: {
								postcode: this.state.postcode
							}
						}}
					>
						<button className='inputButton'>Zoek</button>
					</NavLink>
				</div>
			</div>
		)
	}
}

export default Searchbar
