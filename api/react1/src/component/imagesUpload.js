import React from "react";
import {useForm} from "react-hook-form";
import axios from "axios";
import { FaFileUpload } from "react-icons/fa"

export const ImageUpload = () => {

    const {register, resetField, handleSubmit, setError, clearErrors, formState: {errors}} = useForm();

    const onSubmit = (data, e) => {
        e.target.reset();
        if (!data.image + !data.url && data.image + data.url) {
             setError("fillAtLeastOne", {
                type: "manual",
                message: "Debe completar al menos 1 campo"
            })
            
            
        } else{
            if (!data.image + data.url && data.image + !data.url) {
                console.log(data)
                e.target.reset();
            }
        }
        
        // axios.post("http://localhost:3977/", data)
        //     .then(res => console.log(res.data))
        //     .catch(err => {
        //         console.log(err);
        //     });
    }   

   
    return (
        <div>
            <h2>Subir Imagen</h2>
            <div className="uploadImage">
                <form className="form-c" onSubmit={handleSubmit(onSubmit)}>
                <input
                    type="file"
                    name="image"
                    placeholder="Subir Imagen..."
                    className="form file"
                    id="image" 
                    {...register("image")}
                    onChange={() => clearErrors("fillAtLeastOne")}
                />
                <input
                    type="string"
                    name="title"
                    placeholder="Título..."
                    className="form"
                    id="title"
                    {...register("title", {
                        required: {value: true, message:"Debe completar el campo Título"},
                    })}
                />
                <textarea
                    type="string"
                    name="description"
                    placeholder="Descripción..."
                    className="form"
                    id="description"
                    {...register("description", {
                        required: {value: true, message:"Debe completar el campo Título"},
                    })}
                ></textarea>
                {errors.fillAtLeastOne &&<span className="error-m">{errors.fillAtLeastOne.message}</span>}
                {errors.title && <span className="error-m">{errors.title.message}</span>}
                <button className="btn" type="submit" ><FaFileUpload/></button>
                </form>
            </div>
        </div>
    )
}