import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { auth } from '../firebase'
import { signInWithEmailAndPassword } from '@firebase/auth'

const Another = () => {


    const {
        handleSubmit,
        reset,
        register,
        formState: { errors }
    } = useForm()

    const handleId = (data) => {
        console.log(data)
        signInWithEmailAndPassword(auth, data.email, data.password)
            .then((userCredential) => {
                console.log(userCredential);
                alert("Logged in succesfully")
            })
            .catch((error) => {
                console.log(error);
                alert(error.code)
            });
        reset()
    };


    return (
        <div>
            This is the Main Page
            <form onSubmit={handleSubmit(handleId)}>
                <div className='flex flex-col gap-8'>
                    <input   {...register('email', { required: true, pattern: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/ })} type="email" placeholder='Enter Your Email' />
                    {errors.email?.type === 'required' && "Email is Required"}
                    {errors.email?.type === 'pattern' && "Must be a Valid Email"}
                    <input   {...register('password', { required: true, minLength: 8, maxLength: 20 })} type="password" placeholder='Enter Your Password' />
                    {errors.password?.type === 'required' && "Password is Required"}
                    <button type='submit'>Sign In</button>
                </div>
            </form>


        </div>
    )
}

export default Another
