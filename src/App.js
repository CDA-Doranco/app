import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import CourseDetails from "./pages/CourseDetails/CourseDetails"
import Home from "./pages/Home/Home"
import HeaderImage from "./components/HeaderImage/HeaderImage";
import './App.css'
import BandeauNoir from "./components/FreeDelivery/FreeDelivery";
import Presentation from "./pages/Presentation/Presentation"
import HeadbandWhite from "./components/HeadbandWhite/HeadbandWhite"
import Contact from "./pages/Contact/Contact";
import Login from "./pages/Login/Login";
import AddProduct from "./pages/AddProduct/AddProduct";
import Basket from "./pages/Basket/Basket";
import {useState} from "react";
import Order from "./pages/Order/Order";
import Histories from "./pages/Order/Histories";
import Command from "./pages/Command/Command";
import Commands from "./pages/Command/Commands";
import UpdateProduct from "./pages/AddProduct/UpdateProduct";
import Products from "./pages/Product/Products";
import Logout from "./pages/Login/Logout";
import AddRole from "./pages/AddRole/AddRole";
import Paypal from "./pages/Paypal/Paypal";

const App = () => {

	const [basket, setBasket] = useState(new Map());
	const [userRole, setUserRole] = useState(sessionStorage.getItem("role"));
	const [userId, setUserId] = useState(sessionStorage.getItem("userId"));


	return (

		<Router>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
					<Link className="navbar-brand" to='/'>Asian travel</Link>
                    <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <div className="navbar-nav">
							<Link to='/' className="nav-item nav-link active">Home</Link>
							<Link className="nav-item nav-link" to='/presentation'>The restaurant</Link>
							<Link className="nav-item nav-link" to='/contact'>Contact</Link>
                        </div>
                        <div className="navbar-nav ms-auto">
							{userId!==null && <Link className="nav-item nav-link" to='/bag'>bag</Link> }
							{userId!==null && <Link className="nav-item nav-link"to='/historical'>historical</Link> }
							{userRole==="ROLE_ADMIN" &&<Link className="nav-item nav-link" to='/add-product'>Adding products</Link>}
							{userRole==="ROLE_ADMIN" &&<Link className="nav-item nav-link" to='/products'>Products</Link>}
							{userRole==="ROLE_ADMIN" &&<Link className="nav-item nav-link" to='/add-role'>Users</Link>}
							{userRole==="ROLE_RESTORER" && <Link className="nav-item nav-link" to='/command'>Commands</Link> }


							{userId===null &&<Link className="nav-item nav-link" to='/login'>Login</Link>}
							{userId!==null &&<Link className="nav-item nav-link" to='/logout'>Logout</Link>}
                        </div>
                    </div>
                </div>
            </nav>

			<HeaderImage></HeaderImage>
			<HeadbandWhite/>
			<BandeauNoir></BandeauNoir>
			<Switch>
				<Route path='/product/:id' component={CourseDetails} />
				<Route path='/presentation' component={Presentation} />
				<Route path='/contact' component={Contact} />
				<Route path='/login'><Login setUserId={setUserId} setUserRole={setUserRole}/></Route>
				<Route path='/logout'component={Logout} />
				{/* <Route path='/courses/?name=saumon&popular=true' component={CourseDetails} /> */}
				<Route path='/hello/12' component={() => <h1>Hello 12</h1>} />
				<Route path='/hello' component={() => <h1>Hello world</h1>} />
				{/* <Route path='/' exact component={Home} /> */}
				{userId!=null &&<Route path='/bag' ><Basket basket={basket} setBasket={setBasket}/></Route>}
				{userId!=null &&<Route path='/historical' ><Histories /></Route>}
				{userId!=null &&<Route path='/paypal' ><Paypal /></Route>}
				{userId!=null &&<Route path='/order/:id' component={Order}/>}
				{userRole==="ROLE_RESTORER" &&<Route path='/command/:id' component={Command}/>}
				{userRole==="ROLE_RESTORER" &&<Route path='/command' component={Commands}/>}
				{userRole==="ROLE_ADMIN" &&<Route path='/add-product' component={AddProduct} />}
				{userRole==="ROLE_ADMIN" &&<Route path='/update-product/:id' component={UpdateProduct} />}
				{userRole==="ROLE_ADMIN" &&<Route path='/products' component={Products} />}
				{userRole==="ROLE_ADMIN" &&<Route path='/add-role' component={AddRole} />}

				<Route path='/' exact>
					<Home basket={basket} setBasket={setBasket} userId={userId}/>
				</Route>
				<Route path='*' component={() => <h1>Congratulations, you have found page 404!</h1>} />
			</Switch>
		</Router>
	)
}

export default App