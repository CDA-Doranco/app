import {useState} from "react";

const ProductCard = ({ food,basket, setBasket,userId }) => {
	const [quantity, setQuantity] = useState(1)
	const AddOrder = () => {
		let element;
		if(basket.get(food.id) != null){
			element = basket.get(food.id);
		}else{
			element = food;
			element.quantity=0;
		}
		element.quantity += quantity;
		basket.set(food.id,element);
		setBasket(basket);
	}
	return (
		<div className="col">
			<div className="card h-100" >
				<img className="card-img-top" src={`data:image/jpeg;base64,${food.foodfile.file}`} alt="Card image" style={{maxWidth: '100%',
					height: '200px',objectFit: 'cover' }}/>
				<div className="card-body">
					<h5 className="card-title">{food.name}</h5>
					<h6 className="card-subtitle mb-2 text-muted">{food.category.name}</h6>
					<p className="card-text">{food.description}</p>
					<div className="container">
						<div className="row">
							<div className="col">
								{"$" + food.price}
							</div>
							{userId != null && <div className="col">
								<div className="input-group mb-3">
									<span className="input-group-text" id="basic-addon1">NB</span>
									<input type="number" className="form-control" value={quantity} onChange={e => setQuantity(e.target.value*1)}
										   aria-label="Nombre" aria-describedby="basic-addon1" min={1}/>
								</div>
							</div>}
						</div>
					</div>
				</div>
				{userId != null && <div className="card-footer">
					<div className="d-grid gap-2">
						<button className="btn btn-primary" type="button" onClick={AddOrder} >Add to bag</button>
					</div>
				</div>}
			</div>
		</div>
	)
}

export default ProductCard