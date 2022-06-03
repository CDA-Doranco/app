import React, {useEffect, useState} from 'react';
import Spinner from "../../components/Spinner/Spinner";
import {
    faChevronDown,
    faChevronUp,
    faMinusSquare,
    faShoppingBag,
    faShoppingCart
} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {addOrder} from "../../services/helpers/food";

const Basket = ({basket, setBasket}) => {
    const [products,setProducts] = useState([])
    const [totalPrice,setTotalPrice] = useState(0)
    const [loading,setLoading] = useState(true)


    useEffect(() => {

        const elements =Array.from(basket.values());
        setProducts(elements)
        setLoading(false)

    }, []);
    useEffect(() => {
        var sum = 0;
        for (const element of products) {
            sum+=element.quantity*element.price;
        }
        setTotalPrice(sum)
    }, [products]);

    const deleteFromCart = (productId)  => {
        setBasket(basket.delete(productId))
        setProducts(Array.from(basket.values()))
    };

    const handleInputChange = (event, product) => {
        if(event.nativeEvent.data == null || event.nativeEvent.data < 1){
            product.quantity=1
        }else{
            product.quantity=event.nativeEvent.data
        }

        setBasket(basket.set(product.id,product))
        setProducts(Array.from(basket.values()))
    };

    const onIncrease = (product) => {
        product.quantity++
        setBasket(basket.set(product.id,product))
        setProducts(Array.from(basket.values()))
    };

    const onDecrease = (product) => {
            product.quantity--
            setBasket(basket.set(product.id,product))
            setProducts(Array.from(basket.values()))
    };

    const createOrder = ()=>{
        let order = {products, userId: sessionStorage.getItem('userId')}

        addOrder(order)
            .then((response) => console.log(response.headers.get('Location')))

            .catch((err) => {
                alert(err);
            })
    };

    return (
        <div className="container mt-5 pb-5" style={{minHeight: "350px"}}>
            {loading ? <Spinner/> :
                <div>
                    {products.length === 0 ?
                        <div style={{textAlign: "center"}}>
                            <h2>The bag is empty</h2>
                        </div> :
                        <div>
                            <p className="h4 mb-4 text-center">
                                <FontAwesomeIcon className="mr-2" icon={faShoppingCart}/> Bag
                            </p>
                            {products.map((product) => {
                             return   (
                                 <div key={product.id} className="card mb-3 mx-auto" style={{maxWidth: "940px"}}>
                                     <div className="row no-gutters">
                                         <div className="col-2 mx-3 my-3">
                                             <img src={`data:image/jpeg;base64,${product.foodfile.file}`} alt="Card image" style={{width: '300px',
                                                 height: '250px'}} className="img-fluid"/>
                                         </div>
                                         <div className="col-6">
                                             <div className="card-body">
                                                 <h4 className="card-title">{product.name }</h4>
                                                 <p className="card-text">{product.category.name}</p>
                                             </div>
                                         </div>
                                         <div className="col-1 mt-3">
                                             <button className="btn btn-default"
                                                     disabled={product.quantity === 99}
                                                     onClick={() => onIncrease(product)}>
                                                 <FontAwesomeIcon size="lg" icon={faChevronUp}/>
                                             </button>
                                             <input type="text"
                                                    className="form-control input-number"
                                                    style={{width: "45px"}}
                                                    value={product.quantity}
                                                    onChange={(event) => handleInputChange(event, product)}/>
                                             <button className="btn btn-default"
                                                     disabled={product.quantity === 1}
                                                     onClick={() => onDecrease(product)}>
                                                 <FontAwesomeIcon size="lg" icon={faChevronDown}/>
                                             </button>
                                         </div>
                                         <div className="col-2">
                                             <div className="card-body">
                                                 <h5 className="card-title">
                                                     <span>${product.price * product.quantity}</span>
                                                 </h5>
                                                 <button className="btn btn-warning mb-2"
                                                         onClick={() => deleteFromCart(product.id)}>
                                                     <FontAwesomeIcon className="mr-2"
                                                                      icon={faMinusSquare}/> Remove
                                                 </button>
                                             </div>
                                         </div>
                                     </div>
                                 </div>
                                )
                            })}
                            <hr className="my-3"/>
                            <div className="row">
                                <div className="col-9">
                                    <p className="h5 text-right">Total: $ <span>{totalPrice}</span></p>
                                </div>
                                <div className="col-3">
                                    <div className="form-row">
                                            <button className="btn btn-success" onClick={createOrder}>
                                                <FontAwesomeIcon className="mr-2" icon={faShoppingBag}/> Checkout
                                            </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    }
                </div>
            }
        </div>
    );
};

export default Basket;
