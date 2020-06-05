import React from "react"
import { Switch, Route } from "react-router-dom"
import NavBar from "./components/nav"
import Landing from "./pages/landing"
import Restaurant from "./pages/restaurant"
import Restaurants from "./pages/restaurants"

function App() {
	return (
		<div className='App'>
			{/* Navigation */}
			<NavBar />

			{/* Router */}
			<Switch>
				<Route path='/' exact component={Landing} />
				<Route path='/restaurants' exact component={Restaurants} />
				<Route path='/restaurant/:id' exact component={Restaurant} />
				<Route path='/login' exact component={Login} />
				<Route path='/signup' exact component={SignUp} />
			</Switch>
		</div>
	)
}

export default App




// Mock up pages
const Login = () => {
	return <h1>Login</h1>
}

const SignUp = () => {
	return <h1>Signup</h1>
}
