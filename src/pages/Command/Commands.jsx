import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import {getUserCommands} from "../../services/helpers/food";

const Commands = () => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        recuperationOrderList()
    }, [loading])

    const recuperationOrderList = ()=>{
        getUserCommands()
            .then(response => {
                setProducts(response.data);
            })
            .catch(error => {
                setLoading(false);
                setProducts([]);
            })
    }

    return (
        <>
            <h1>Liste des commands</h1>
            <table className="table table-hover">
                <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Id</th>
                    <th scope="col">Date</th>
                    <th scope="col">Total price</th>
                </tr>
                </thead>
                <tbody>
                {products.length > 0 ? (
                    products.map((value, index) =>
                    <tr>
                        <th scope="row"> <Link to={"/order/"+value.id}> {index + 1}</Link></th>
                        <td>{value.id}</td>
                        <td>{value.date}</td>
                        <td>{"$" + value.totalPrice}</td>
                    </tr>
                )):
                    <h3>Chargement...</h3>
                }
                </tbody>
            </table>
        </>
    );
}

export default  Commands;