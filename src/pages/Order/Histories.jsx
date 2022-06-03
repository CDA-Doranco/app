import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import { getUserOrders} from "../../services/helpers/food";

const Histories = () => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        recuperationOrderList()
    }, [loading])

    const recuperationOrderList = ()=>{
        getUserOrders(sessionStorage.getItem('userId'))
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
            <table className="table table-hover">
                <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Id</th>
                    <th scope="col">Total price</th>
                    <th scope="col">Date</th>
                </tr>
                </thead>
                <tbody>
                {products.length > 0 ? (
                    products.map((value, index) =>
                    <tr key={index}>
                        <th scope="row"> <Link to={"/order/"+value.id}> {index + 1}</Link></th>
                        <td>{value.id}</td>
                        <td>{value.date}</td>
                        <td>{"$" + value.totalPrice}</td>
                    </tr>
                )):
                    <></>
                }
                </tbody>
            </table>
        </>
    );
}

export default  Histories;