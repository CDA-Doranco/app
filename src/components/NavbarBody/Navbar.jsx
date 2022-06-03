import './css.css'
import React from "react";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link, Redirect
} from "react-router-dom";
import Entree from "../AllProducts/AllProducts";
import Garnish from "../Garnish/Garnish";
import Dish from "../Dish/Dish";
import Dessert from "../Dessert/Dessert";
import Drink from "../Drink/Drink";
import AllProduct from "../AllProducts/AllProducts";
import AddProduct from "../../pages/AddProduct/AddProduct";
import Product from "../AllProducts/Product";
const NavbarBody = ({basket, setBasket,userId}) => {
	return (
		<Router>

		<nav className="navNavbarBody">
			<ul className="ulNavbarBody">
				<li className="liNavbarBody"><Link to='/entree'>entree</Link></li>
				<li className="liNavbarBody"><Link to='/dish'>dish</Link></li>
				<li className="liNavbarBody"><Link to='/dessert'>dessert</Link></li>
				<li className="liNavbarBody"><Link to='/garnish'>garnish</Link></li>
				<li className="liNavbarBody"><Link to='/drink'>drink</Link></li>
				<li className="liNavbarBody"><Link to='/all'>All</Link></li>
			</ul>
		</nav>

			<Switch>
				<Route path='/' exact>
					<AllProduct basket={basket} setBasket={setBasket} userId={userId}/>
				</Route>
				<Route path='/all'>
					<AllProduct basket={basket} setBasket={setBasket} userId={userId}/>
				</Route>
				<Route path="/entree">
					<Product basket={basket} setBasket={setBasket} userId={userId} category={"entree"}/>
				</Route>
				<Route path="/garnish">
					<Product basket={basket} setBasket={setBasket} userId={userId} category={"garnish"}/>
				</Route>
				<Route path="/dish">
					<Product basket={basket} setBasket={setBasket} userId={userId} category={"dish"}/>
				</Route>
				<Route path="/dessert">
					<Product basket={basket} setBasket={setBasket} userId={userId} category={"dessert"}/>
				</Route>
				<Route path="/drink">
					<Product basket={basket} setBasket={setBasket} userId={userId} category={"drink"}/>
				</Route>

			</Switch>
			</Router>




	)
}

export default NavbarBody
