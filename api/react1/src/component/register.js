import React, {Fragment} from "react";
import {useForm} from "react-hook-form";
import axios from "axios";
import Background from "./Background";

const RegisterForm = () => {

    const {register, handleSubmit, formState: {errors}} = useForm();

    const onSubmit = (data, e) => {
        //e.target.reset();
        axios.post("http://localhost:3977/register", data)
            .then(res => console.log(res.data))
            .catch(err => {
                console.log(err);
            });
    }

    

    return (
        <Fragment>
            <Background/>
            <div className="input">
                <h2>Nuevo Usuario</h2>
                <form className="form-c" onSubmit={handleSubmit(onSubmit)}>
                    <input
                        type="string"
                        name="name"
                        placeholder="Nombre..."
                        className="form"
                        id="name"
                        {...register("name", {
                            required: {value: true, message:"Debe completar el campo"},
                            minLength: {value: 3, message: "Debe contener como mínimo 3 letras"},
                            maxLength: {value: 30, message: "No puede ser mayor a 30 caractéres"}
                        })}
                    />
                    <span className="error-m">
                        {errors.name && errors.name.message}
                    </span>
                    <input
                        type="string"
                        name="surname"
                        placeholder="Apellido..."
                        className="form"
                        id="surname"
                        {...register("surname", {
                            required: {value: true, message:"Debe completar el campo"},
                            minLength: {value: 3, message: "Debe contener como mínimo 3 letras"},
                            maxLength: {value: 30, message: "No puede ser mayor a 30 caractéres"}
                        })}
                    />
                    <span className="error-m">
                        {errors.surname && errors.surname.message}
                    </span>
                    <input
                        type="string"
                        name="email"
                        placeholder="Email..."
                        className="form"
                        id="email"
                        {...register("email", {
                            required: {value: true, message:"Debe completar el campo"},
                        })}
                    />
                    <span className="error-m">
                        {errors.email && errors.email.message}
                    </span>
                    <input
                        type="password"
                        name="password"
                        placeholder="Contraseña..."
                        className="form"
                        id="password"
                        {...register("password", {
                            required: {value: true, message:"Debe completar el campo"},
                        })}
                    />
                    <span className="error-m">
                        {errors.password && errors.password.message}
                    </span>
                    <button className="btn" type="submit">Enviar</button>
                </form>
            </div>
        </Fragment>
    );
}

export default RegisterForm;