import React from 'react';
import { useForm } from 'react-hook-form';

const SignUp = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();

    const handleSignUp = data => {
        const firstName = data.first_name;
        const lastName = data.last_name;
        const userName = data.email;
        const phone = data.phone;
        const password = data.password;

        const users = {
            firstName: firstName,
            lastName: lastName,
            userName: userName,
            phone: phone,
            password: password
        }

        fetch('http://localhost:5000/users', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(users)
        })
            .then(res => res.json())
            .then(data => {

            })
            .catch(error => console.log(error.message))

    }

    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col">
                <div className="text-center">
                    <h1 className="text-5xl font-bold">Sign Up!</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl">
                    <form onSubmit={handleSubmit(handleSignUp)}>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">First Name</span>
                            </label>
                            <input type='name' {...register("first_name", { required: true })}
                                placeholder="first name" className="input input-bordered w-full max-w-xs text-white" />
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text text-white">Last Name</span>
                            </label>
                            <input type='name' {...register("last_name", { required: true })}
                                placeholder="last name" className="input input-bordered w-full max-w-xs text-white" />
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text text-white">Email</span>
                            </label>
                            <input type='email' {...register("email", { required: true })}
                                placeholder="email" className="input input-bordered w-full max-w-xs text-white" />
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text text-white">Phone</span>
                            </label>
                            <input type='text' {...register("phone", { required: true })}
                                placeholder="phone" className="input input-bordered w-full max-w-xs text-white" />
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text text-white">Password</span>
                            </label>
                            <input type='password' {...register("password", { required: true })}
                                placeholder="password" className="input input-bordered w-full max-w-xs text-white" />
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text text-white">Confirm Password</span>
                            </label>
                            <input type='password' {...register("confirm_password", { required: true })}
                                placeholder="confirm password" className="input input-bordered w-full max-w-xs text-white" />
                        </div>
                        <input className='btn btn-primary bg-gradient-to-r from-primary to-secondary text-white uppercase w-full mt-4' value='Sign Up' type="submit" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;