import React, {Fragment} from "react";
import {useForm} from "react-hook-form";
import axios from "axios";
import Background from "./Background";

const LoginForm = () => {

    const {register, handleSubmit, formState: {errors}} = useForm();

    const onSubmit = (data, e) => {
        //e.target.reset();
        axios.post("http://localhost:3977/login", data)
            .then(res => console.log(res.data))
            .catch(err => {
                console.log(err);
            });
    }
    
    return (
        <Fragment>
            <Background/>
            <div className="input">
                <h2>LOGIN</h2>
                <form className="form-c" onSubmit={handleSubmit(onSubmit)}>
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

export default LoginForm;