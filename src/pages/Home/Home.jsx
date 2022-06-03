import './css.css';
import NavbarBody from "../../components/NavbarBody/Navbar";
import HeadbandFlor from "../../components/HeadbandFlor/HeadbandFlor";

const Home = ({basket, setBasket,userId}) => {

	return (
		<div>
			<HeadbandFlor/>
			<NavbarBody basket={basket} setBasket={setBasket} userId={userId}/>

		</div>



	)
}

export default Home
