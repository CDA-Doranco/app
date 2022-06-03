import React, {useEffect, useState} from 'react';
import {Link,} from "react-router-dom";
import {deleteFood, getAllFoods} from "../../services/helpers/food";


const Products = () => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        recuperationFoodList()
    }, [loading])
    const recuperationFoodList = ()=>{
        getAllFoods()
            .then(response => {
                setLoading(false);
                setProducts(response.data);
            })
            .catch(error => {
                setLoading(false);
                setProducts([]);
            })
    }

const deleteProduct=(id)=>{
    deleteFood(id).then(response => {
        const tab = products.filter((value)=>value.id!==id);
        setProducts(tab);
    })
        .catch(error => {
            alert('Product can not delete')
        })
}
    return (
        <>
            <table className="table table-hover">
                <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Id</th>
                    <th scope="col">Name</th>
                    <th scope="col">Category</th>
                    <th scope="col">Delete</th>
                </tr>
                </thead>
                <tbody>
                {products.length > 0 ? (
                    products.map((value, index) =>
                    <tr key={index}>
                        <th scope="row"> <Link to={"/update-product/"+value.id}> {index + 1}</Link></th>
                        <td>{value.id}</td>
                        <td>{value.name}</td>
                        <td>{value.category.name}</td>
                        <td><input type="button" onClick={()=>deleteProduct(value.id)} value="Delete"/> </td>
                    </tr>
                )):
                    <></>
                }
                </tbody>
            </table>
        </>
    );
}

export default  Products;