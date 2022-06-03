import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import ProductCard from "../ProductCard/ProductCard";


const Dessert = () => {

// fetch sur l'URL /courses/1 où 1 est l'id recherché

    const { id } = useParams()
    const [state, setState] = useState({
        loading: true,
        data: [],
        error: null,
    })

    useEffect(() => {
        fetch(`https://restaurant-api-cda.herokuapp.com/api/food/dessert`)
            .then(response => {
                if (response.status === 404) {
                    throw Error('Plat introuvable')
                }
                return response.json()
            })
            .then(data => {
                setState({
                    loading: false,
                    data: data,
                    error: null,
                })
            })
            .catch(error => {
                setState({
                    loading: false,
                    data: [],
                    error: error.message
                })
            })
    }, [])

    if (state.loading) {
        return (
            <div>Chargement...</div>
        )
    }

    if (state.error) {
        return (
            <div>{state.error}</div>
        )
    }

    return (
        <div>
            <ProductCard image ={state.data.map(food => food.image)} name={state.data.map(food => food.name)} description ={state.data.map(food => food.description)} price = {state.data.map(food => food.category.name)} ></ProductCard>
        </div>




    )
}

export default Dessert
