import Dropzone from "../../components/Dropzone/Dropzone"
import {useDropzone} from "react-dropzone";
import {useCallback, useEffect, useState} from "react";
import {getAllCategories, getFoodById, updateFood} from "../../services/helpers/food";
import {useParams} from "react-router-dom";

const UpdateProduct = () => {
    const { id } = useParams()
    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [price, setPrice] = useState("")
    const [category, setCategory] = useState("")
    const [categories, setCategories] = useState([])
    const [file, setFile] = useState({})
    const [authorization, setAuthorization] = useState("")

    useEffect(() => {
        recuperationProduit()
        getCategories()
    }, [])

    const onDrop = useCallback(acceptedFiles => {
        setFile( acceptedFiles[0]);

    }, [])
    const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})
    const getCategories =()=>{
        getAllCategories().then(response => {
            setCategories(response.data);
        })
    }
    const onFinish = (values) => {
        const formData = new FormData();
        formData.append('details',new Blob([JSON.stringify({id,name,description,price,category})], {
            type: "application/json"
        }));
        formData.append("file",file);
        updateFood(formData)
        .then().catch(err => console.error(err))
    }
    const recuperationProduit = ()=>{
        getFoodById(id)
            .then(response => {
                const product=response.data;
                setName(product.name)
                setDescription(product.description)
                setPrice(product.price)
                setCategory(product.category.name)
            })
            .catch(error => {

            })
    }
    return (
        <form>
            <div className="row mb-3">
                <label htmlFor="name" className="col-sm-2 col-form-label">Nom du produit:</label>
                <div className="col-sm-3">
                    <input type="text" className="form-control" id="name" value={name} name="name" onChange={e => setName(e.target.value)}/>
                </div>
            </div>
            <div className="row mb-3">
                <label htmlFor="description" className="col-sm-2 col-form-label">Description du produit:</label>
                <div className="col-sm-3">
                    <input type="text" className="form-control" id="description" value={description} name="description" onChange={e => setDescription(e.target.value)}/>
                </div>
            </div>
            <div className="row mb-3">
                <label htmlFor="price" className="col-sm-2 col-form-label">Prix du produit:</label>
                <div className="col-sm-3 ">
                    <input type="number" className="form-control" id="price" value={price} name="price" onChange={e => setPrice(e.target.value)}/>
                </div>
            </div>
            <div className="row mb-3">
                <label htmlFor="category" className="col-sm-2 col-form-label">Catégorie:</label>
                <div className="col-sm-3">
                    {/*<input type="text" className="form-control" id="category"  name="category" onChange={e => setCategory(e.target.value)}/>*/}
                    <select className="form-select" aria-label="category" id="category" name="category" onChange={e => setCategory(e.target.value)}>
                        {categories.map((element,index) =>
                            <option key={index} value={element.name} selected={element.name === category ?"selected":""}>{element.name} </option>
                        )}
                    </select>
                </div>
            </div>

            <div className="row mb-3">
                <div className="col-sm-3 offset-sm-2">
                    <div {...getRootProps()}>
                        <input {...getInputProps()}  />
                        {
                            isDragActive ?
                                <p>Drop the files here ...</p> :
                                <p>Drag 'n' drop some files here, or click to select files</p>
                        }
                    </div>
                </div>
            </div>
            <div className="row mb-3">
                <div className="col-sm-1 offset-sm-3">
                <input className="btn btn-primary"
                      type="button"
                      value="Enregistrer" onClick={onFinish}/>
            </div>
            </div>
        </form>
    )
}

export default UpdateProduct