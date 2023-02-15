import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

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
                <div className="card w-96 shadow-3xl p-10 glass">
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
                        <label class="label">
                            <Link to='/signup' class="label-text-alt link link-hover text-white">New to CanSOFT</Link>
                        </label>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;