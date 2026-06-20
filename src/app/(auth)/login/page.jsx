'use client'

import { authClient } from "@/lib/auth-client";
import { useForm } from "react-hook-form";

const LoginPage = () => {

    const { register, formState: { errors }, handleSubmit } = useForm();


    const onSubmit = async (data) => {

        const { data: res, error } = await authClient.signIn.email({
            email: data.email,
            password: data.password,

            callbackURL: "/",
        });

        if (res) {
            alert("loging successfully");

        }

        if (error) {

            alert(error.message)
        }

    };


    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className='min-h-screen flex flex-col gap-6 justify-center items-center'>
                <h1 className='text-2xl font-bold text-blue-600'> Enter your details  for loging</h1>
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4 ">
                    <legend className="fieldset-legend">Login</legend>

                    <label className="label">Email</label>
                    <input type="email" className="input" placeholder="Email" {...register("email", { required: "Email Address is required" })} />
                    {errors.email && <p className="text-red-500">{errors.email.message}</p>}
                    <label className="label">Password</label>
                    <input type="password" className="input" placeholder="Password" {...register("password", { required: "Password is required" })} />
                    {errors.password && <p className="text-red-500">{errors.password.message}</p>}
                    <button className="btn btn-neutral mt-4">Login</button>
                </fieldset>
            </div>
        </form>
    );
};

export default LoginPage;