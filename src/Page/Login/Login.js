import React from 'react';
import { useForm } from 'react-hook-form';

const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();

    const handleLogin = data => {
        console.log(data.email, data.password);
    }
    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col">
                <div className="text-center">
                    <h1 className="text-5xl font-bold">Login!</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl">
                    <form onSubmit={handleSubmit(handleLogin)}>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text text-white">Email</span>
                            </label>
                            <input type='email' {...register("email", { required: true })}
                                placeholder="email" className="input input-bordered w-full max-w-xs text-white" />
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text text-white">Password</span>
                            </label>
                            <input type='password' {...register("password", { required: true })}
                                placeholder="password" className="input input-bordered w-full max-w-xs text-white" />
                        </div>

                        <input className='btn btn-primary bg-gradient-to-r from-primary to-secondary text-white uppercase w-full mt-4' value='Login' type="submit" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;