'use client'

import { authClient } from "@/lib/auth-client";
import { useForm } from "react-hook-form";

const RegisterPage = () => {

    const { register, formState: { errors }, handleSubmit } = useForm();


    const onSubmit = async (data) => {


        const { data: res, error } = await authClient.signUp.email({
            name: data.FirstName,
            email: data.email,
            password: data.password,
            callbackURL: "/",
        });

        if (error) {

            alert(error.message);
        }
        if (res) {

            alert("Signup Successfully");
        }

    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className='min-h-screen flex flex-col gap-6 justify-center items-center'>
                <h1 className='text-2xl font-bold text-blue-600'> Register Here</h1>
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4 ">
                    <legend className="fieldset-legend">Register</legend>
                    <label className="label">First Name</label>
                    <input type="text" className="input" placeholder="Enter your first Name" {...register("FirstName", { required: "First Name is required" })} />
                    {errors.FirstName && <p className="text-red-500">{errors.FirstName.message}</p>}
                    <label className="label">Last Name</label>
                    <input type="text" className="input" placeholder="Enter your Last Name" {...register("LastName", { required: "Last Name is required" })} />
                    {errors.LastName && <p className="text-red-500">{errors.LastName.message}</p>}
                    <label className="label">Profile Url</label>
                    <input type="text" className="input" placeholder="Enter your profile link" {...register("profile", { required: "Profile link is required" })} />
                    {errors.profile && <p className="text-red-500">{errors.profile.message}</p>}
                    <label className="label">Email</label>
                    <input type="email" className="input" placeholder="Email" {...register("email", { required: "Email Address is required" })} />
                    {errors.email && <p className="text-red-500">{errors.email.message}</p>}
                    <label className="label">New Password</label>
                    <input type="password" className="input" placeholder="Password" {...register("password", { required: "Password is required" })} />
                    {errors.password && <p className="text-red-500">{errors.password.message}</p>}
                    <button className="btn btn-neutral mt-4">Register</button>
                </fieldset>
            </div>
        </form>
    );
};

export default RegisterPage;