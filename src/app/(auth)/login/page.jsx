'use client'
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { authClient } from "@/lib/auth-client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Link from "next/link";
import LogingGoogle from "@/Components/authpage/login/LogingGoogle";

const LoginPage = () => {

    const { register, formState: { errors }, handleSubmit } = useForm();

    const [isShowpass, setisSHowpass] = useState(false);


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
        <div className="flex flex-col justify-center items-center min-h-screen gap-2">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className=' flex flex-col gap-6 justify-center items-center'>
                    <h1 className='text-2xl font-bold text-blue-600'> Enter your details  for loging</h1>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4  relative">
                        <legend className="fieldset-legend">Login</legend>

                        <label className="label">Email</label>
                        <input type="email" className="input" placeholder="Email" {...register("email", { required: "Email Address is required" })} />
                        {errors.email && <p className="text-red-500">{errors.email.message}</p>}
                        <label className="label">Password</label>
                        <input type={isShowpass ? "text" : "password"} className="input " placeholder="Password" {...register("password", { required: "Password is required" })} />
                        <div className="text-xl absolute bottom-21 right-6  cursor-pointer p-1" onClick={() => setisSHowpass(!isShowpass)}>
                            {isShowpass ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>}
                        </div>
                        {errors.password && <p className="text-red-500">{errors.password.message}</p>}
                        <button className="btn btn-neutral mt-4">Login</button>
                        <p>Dont have a account? <Link href="register" className="text-blue-500">Register here</Link></p>
                    </fieldset>
                </div>
            </form>
            <LogingGoogle></LogingGoogle>
        </div>
    );
};

export default LoginPage;