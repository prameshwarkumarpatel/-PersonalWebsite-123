import React from 'react'
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import Signup from './Signup';

export default function Login() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);

  return (
    <div>
      <div className="pawankuar">
        {/* Open modal */}
        <button
          className="btn"
          onClick={() => document.getElementById('my_modal_3').showModal()}
        >
          Login
        </button>

        <dialog id="my_modal_3" className="modal">
          <div className="modal-box">
            
            {/* Close button */}
            <button
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              onClick={() => document.getElementById('my_modal_3').close()}
            >
              ✕
            </button>

            <h3 className="font-bold text-lg">Login Page</h3>

            <form onSubmit={handleSubmit(onSubmit)} className="mt-4 flex flex-col space-y-3">
              
              {/* Email */}
              <label className="text-left text-red-700">Email</label>
              <input
                type="email"
                className="w-80 px-3 py-3 border rounded-md outline-none focus:ring-2 focus:ring-red-400"
                placeholder="Enter your email"
                {...register("email", { required: true })}
              />
              {errors.email && <span className="text-red-500 text-sm">Email is required</span>}

              {/* Password */}
              <label className="text-left text-red-700">Password</label>
              <input
                type="password"
                placeholder="Enter your password"
                className="w-80 py-3 px-3 border rounded-md outline-none focus:ring-2 focus:ring-red-400"
                {...register("password", { required: true })}
              />
              {errors.password && <span className="text-red-500 text-sm">Password is required</span>}

              {/* Actions */}
              <div className="flex justify-between items-center py-3">
                <button type="submit" className="btn btn-primary">Login</button>
                <p className="font-bold">
                  Not registered?{" "}
                  <a href={<Signup/>} className="px-2 text-red-700 underline">Signup</a>
                </p>
              </div>
            </form>
          </div>
        </dialog>
      </div>
    </div>
  );
}
