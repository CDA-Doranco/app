import React, {useCallback, useState} from 'react'
import {useDropzone} from 'react-dropzone'








const Dropzone= () => {
    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [price, setPrice] = useState("")
    const [image, setImage] = useState("")
    const [category, setCategory] = useState("")
    const [authorization, setAuthorization] = useState("")

    const onDrop = useCallback(acceptedFiles => {


    }, [])
    const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})

    return (
        <div>
            <label>
                <p>Nom du produit:</p>
                <input name="name" type="text"  onChange={e => setDescription(e.target.value)}/>
            </label>

            <label>
                <p>Description du produit:</p>
                <input name="description" type="text"  onChange={e => setName(e.target.value)}/>
            </label>

            <label>
                <p>Image du produit:</p>
                <input name="image" type="text"  onChange={e => setImage(e.target.value)}/>
            </label>
            <label>
            <p>Prix du produit:</p>
            <input name="price" type="text"  onChange={e => setPrice(e.target.value)}/>
        </label>

            <label>
                <p>Categorie du produit:</p>
                <input name="category" type="text"  onChange={e => setCategory(e.target.value)}/>
            </label>
    <div {...getRootProps()}>
            <input {...getInputProps()}  />
            {
                isDragActive ?
                    <p>Drop the files here ...</p> :
                    <p>Drag 'n' drop some files here, or click to select files</p>
            }
        </div>
    </div>
    )
}

export default Dropzone