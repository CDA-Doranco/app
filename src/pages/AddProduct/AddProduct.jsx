import Dropzone from "../../components/Dropzone/Dropzone";
import {useDropzone} from "react-dropzone";
import {useCallback, useEffect, useState} from "react";
import {getAllCategories, saveFood} from "../../services/helpers/food";
import {Button} from "react-bootstrap";

const AddProduct = () => {
    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [price, setPrice] = useState("")
    const [image, setImage] = useState("")
    const [category, setCategory] = useState("")
    const [categories, setCategories] = useState([])
    const [file, setFile] = useState({})
    const [authorization, setAuthorization] = useState("")

    const onDrop = useCallback(acceptedFiles => {
        setFile( acceptedFiles[0])

    }, [])
    const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})
    useEffect(() => {
        getCategories()

    }, [])

    const getCategories =()=>{
        getAllCategories().then(response => {
            setCategories(response.data);
            setCategory(response.data[0].name)
        })
    }
    const onFinish = (values) => {
        const formData = new FormData();
        formData.append('details',new Blob([JSON.stringify({name,description,price,category})], {
            type: "application/json"
        }));
        formData.append("file",file);
        saveFood(formData)
            .then((reponse) => {
                alert("Article has been added")
            })
            .catch((error) => {
                alert("A field is empty")
            });

    }
    return (
        <form>
            <div className="row mb-3">
                <label htmlFor="name" className="col-sm-2 col-form-label">Name of product:</label>
                <div className="col-sm-3">
                    <input type="text" className="form-control" id="name"  name="name" onChange={e => setName(e.target.value)}/>
                </div>
            </div>
            <div className="row mb-3">
                <label htmlFor="description" className="col-sm-2 col-form-label">Description of product:</label>
                <div className="col-sm-3">
                    <input type="text" className="form-control" id="description"  name="description" onChange={e => setDescription(e.target.value)}/>
                </div>
            </div>
            <div className="row mb-3">
                <label htmlFor="price" className="col-sm-2 col-form-label">Price of product:</label>
                <div className="col-sm-3 ">
                    <input type="number" className="form-control" id="price"  name="price" onChange={e => setPrice(e.target.value)}/>
                </div>
            </div>
            <div className="row mb-3">
                <label htmlFor="category" className="col-sm-2 col-form-label">Catégory:</label>
                <div className="col-sm-3">
                    {/*<input type="text" className="form-control" id="category"  name="category" onChange={e => setCategory(e.target.value)}/>*/}
                    <select className="form-select" aria-label="category" id="category" name="category" onChange={e => setCategory(e.target.value)}>
                        {categories.map((element,index) =>
                            <option key={index} value={element.name} >{element.name}</option>
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
                                <Button >Add picture</Button>
                        }
                    </div>
                </div>
            </div>
            <div className="row mb-3">
                <div className="col-sm-1 offset-sm-3">
                <input className="btn btn-primary"
                      type="button"
                      value="Save" onClick={onFinish}/>
            </div>
            </div>
        </form>
    )
}

export default AddProduct