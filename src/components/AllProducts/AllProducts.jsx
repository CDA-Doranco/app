import {useEffect, useState} from "react";
import ProductCard from "../ProductCard/ProductCard";
import {getAllFoods} from "../../services/helpers/food";


const AllProduct = ({basket, setBasket,userId}) => {
    const [loading, setLoading] = useState(true)
    const [foods, setFoods] = useState([])
    const [error, setError] = useState(null)


    useEffect(() => {
        recuperationFoodList()
    }, [loading])
   const recuperationFoodList = ()=>{
       getAllFoods()
           .then(response => {
               setLoading(false);
               setFoods(response.data);
               setError(null);
           })
           .catch(error => {
               setLoading(false);
               setFoods([]);
               setError(error.message);
           })
   }

    if (error) {
        return (
            <div>{error}</div>
        )
    }

    return (
        <div className="row row-cols-1 row-cols-md-4 g-4">
            {
                foods.length > 0 ? (
                    foods.map((value, index) => <ProductCard key={index} food={value} basket={basket} setBasket={setBasket} userId={userId}/>)
                ):
                    <h3>Chargement...</h3>
            }
        </div>



    )
}

export default AllProduct
