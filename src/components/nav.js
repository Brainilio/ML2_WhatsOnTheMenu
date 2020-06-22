import React from "react"
import { NavLink } from "react-router-dom"

const NavBar = () => {
	return (
		<nav className='header-nav'>
			<NavLink to='/' exact activeClassName='header-nav-logo'>
				<span className='header-title'>WhatsOnTheMenu</span>
			</NavLink>
			<ul className='header-nav-links'>
				<li>
					<span>Restaurant: </span>
					<NavLink to='/login'>
						<span>Log-in </span>
					</NavLink>
					of{" "}
					<NavLink to='/signup'>
						<span>Registreer</span>
					</NavLink>
				</li>
			</ul>
		</nav>
	)
}

export default NavBar
