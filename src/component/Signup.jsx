import React from 'react'
import { useForm } from "react-hook-form";

export default function Signup() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);

  return (
    <div>
      {/* Open modal */}
      <button
        className="btn"
        onClick={() => document.getElementById('my_modal_3').showModal()}
      >
        Register
      </button>

      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form method="dialog" onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            {/* Close button */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>

            <h3 className="font-bold text-lg">Signup</h3>

            {/* Name */}
            <div>
              <label className="block text-left text-red-700">Name</label>
              <input
                type="text"
                className="w-80 px-3 py-2 border rounded-md outline-none focus:ring-2 focus:ring-red-400"
                placeholder="Enter your name"
                {...register("name", { required: true })}
              />
              {errors.name && <span className="text-red-500 text-sm">Name is required</span>}
            </div>
                {/* Email */}
            <div>
              <label className="block text-left text-red-700">Email</label>
              <input
                type="email"
                className="w-80 px-3 py-2 border rounded-md outline-none focus:ring-2 focus:ring-red-400"
                placeholder="Enter your email"
                {...register("email", { required: true })}
              />
              {errors.email && <span className="text-red-500 text-sm">Email is required</span>}
            </div>

            {/* Password */}
            <div>
              <label className="block text-left text-red-700">Password</label>
              <input
                type="password"
                className="w-80 px-3 py-2 border rounded-md outline-none focus:ring-2 focus:ring-red-400"
                placeholder="Enter your password"
                {...register("password", { required: true, minLength: 6 })}
              />
              {errors.password && <span className="text-red-500 text-sm">Password must be at least 6 characters</span>}
            </div>

           
            {/* Submit */}
            <div className="pt-2">
              <button type="submit" className="btn btn-primary w-full">
                Signup
              </button>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
}
