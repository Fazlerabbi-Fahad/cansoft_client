import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

const Accounts = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [user, setUser] = useState([]);


    useEffect(() => {
        fetch('http://localhost:5000/users/')
            .then(res => res.json())
            .then(data => setUser(data))
    }, [])

    const handleAccountEdit = data => {
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

        fetch(`http://localhost:5000/users/${data._id}`, {
            method: "PUT",
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
        <div className='w-[50vw]'><div className="card ">
            <div className="card-body">
                <form onSubmit={handleSubmit(handleAccountEdit)}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">First Name</span>
                        </label>
                        <input type='name' {...register("first_name", { required: false })}
                            defaultValue={user.firstName} className="input input-bordered w-full max-w-xs text-white" />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text text-white">Last Name</span>
                        </label>
                        <input type='name' {...register("last_name", { required: false })}
                            defaultValue={user.lastName} className="input input-bordered w-full max-w-xs text-white" />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text text-white">Email</span>
                        </label>
                        <input type='email' {...register("email", { required: false })}
                            defaultValue={user.userName} className="input input-bordered w-full max-w-xs text-white" />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text text-white">Phone</span>
                        </label>
                        <input type='text' {...register("phone", { required: false })}
                            defaultValue={user.phone} className="input input-bordered w-full max-w-xs text-white" />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text text-white">Password</span>
                        </label>
                        <input type='password' {...register("password", { required: false })}
                            defaultValue={user.password} className="input input-bordered w-full max-w-xs text-white" />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text text-white">Confirm Password</span>
                        </label>
                        <input type='password' {...register("confirm_password", { required: false })}
                            defaultValue={user.password} className="input input-bordered w-full max-w-xs text-white" />
                    </div>
                    <input className='btn btn-primary bg-gradient-to-r from-primary to-secondary text-white uppercase w-full mt-4' value='Update Users' type="submit" />
                </form>
            </div>
        </div>
        </div>
    );
};

export default Accounts;