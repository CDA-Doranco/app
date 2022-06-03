import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {getOrderById} from "../../services/helpers/food";

const Order = () => {
    const { id } = useParams()
    const [product, setProduct] = useState({})
    const [orderItems, setOrderItems] = useState([])
    useEffect(() => {
        recuperationOrder()
    }, [])

    const recuperationOrder = ()=>{
        getOrderById(id)
            .then(response => {
                setProduct(response.data);
                setOrderItems([...response.data.orderItems])
            })
            .catch(error => {
                setProduct({});
                setOrderItems([])
            })
    }
    return (
        <>
            <h4 style={{textAlign: "center"}}> Order #{product.id}</h4>
            <div className="row border my-5 px-5 py-3">
                <div className="col-md-6">
                    <h5 style={{marginBottom: "30px"}}> Customer information</h5>
                    <p className="personal_data_item">First name:
                        <span className="personal_data_text">{product.firstName}</span>
                    </p>
                    <p className="personal_data_item">Last name:
                        <span className="personal_data_text">{product.lastName}</span>
                    </p>
                    <p className="personal_data_item">City:
                        <span className="personal_data_text">{product.city}</span>
                    </p>
                    <p className="personal_data_item">Address:
                        <span className="personal_data_text">{product.address}</span>
                    </p>
                    <p className="personal_data_item">Email:
                        <span className="personal_data_text">{product.email}</span>
                    </p>
                    <p className="personal_data_item">Phone number:
                        <span className="personal_data_text">{product.phoneNumber}</span>
                    </p>
                    <p className="personal_data_item">Post index:
                        <span className="personal_data_text">{product.postIndex}</span>
                    </p>
                </div>
                <div className="col-md-6">
                    <h5 style={{marginBottom: "30px"}}> Order information</h5>
                    <p className="personal_data_item">Order id:
                        <span className="personal_data_text">{product.id}</span>
                    </p>
                    <p className="personal_data_item">Date:
                        <span className="personal_data_text">{product.date}</span>
                    </p>
                    <h4 style={{marginBottom: "30px", marginTop: "30px"}}>Order summary:
                        <span style={{color: "green"}}> {product.totalPrice} $</span>
                    </h4>
                </div>
            </div>
            <table className="table border text-center">
                <thead className="table-active">
                <tr>
                    <th>Product Id</th>
                    <th>Product Brand</th>
                    <th>Product Name</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Amount</th>
                </tr>
                </thead>
                <tbody>
                {
                    orderItems.map((orderItem, index) =>
                        <tr key={index}>
                            <th>{orderItem.food.id}</th>
                            <th>{orderItem.food.category.name}</th>
                            <th>{orderItem.food.name}</th>
                            <th>{orderItem.food.price}.0 $</th>
                            <th>{orderItem.quantity}</th>
                            <th>{orderItem.food.price * orderItem.quantity} $</th>
                        </tr>
                    )
                }

                </tbody>
            </table>
        </>
    );
};

export default Order;
