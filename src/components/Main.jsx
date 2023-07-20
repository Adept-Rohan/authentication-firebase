import React from 'react'
import { useForm } from 'react-hook-form'
import { createUserWithEmailAndPassword, AuthErrorCodes } from '@firebase/auth'
import { auth } from '../firebase'

const Main = () => {
    const {
        handleSubmit,
        register,
        formState: { errors },
        reset
    } = useForm()

    const handleId = (data) => {
        console.log(data)
        createUserWithEmailAndPassword(auth, data.email, data.password)
            .then((userCredential) => {
                console.log(userCredential.user);
            })
            .catch((err) => {
                if (err.code === AuthErrorCodes.WEAK_PASSWORD) {
                    setError("The password is too weak.");
                } else if (err.code === AuthErrorCodes.EMAIL_EXISTS) {
                    setError("The email address is already in use.");
                } else {
                    console.log(err.code);
                    alert(err.code);
                }
            });
        reset()
    }
    return (
        <div>
            This is the Main Page
            <form onSubmit={handleSubmit(handleId)}>
                <div className='flex flex-col gap-8'>
                    <input   {...register('name', { required: true })} type="text" placeholder='Enter Your Name' />
                    {errors.name?.type === 'required' && "Name is Required"}
                    <input  {...register('email', { required: true, pattern: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/ })} type="email" placeholder='Enter Your Email' />
                    {errors.email?.type === 'required' && "Email is Required"}
                    {errors.email?.type === 'pattern' && "Must be a Valid Email"}
                    <input  {...register('password', { required: true, minLength: 8, maxLength: 20 })} type="password" placeholder='Enter Your Password' />
                    {errors.password?.type === 'required' && "Password is Required"}
                    <button type='submit'>Register</button>
                </div>
            </form>


        </div>
    )
}

export default Main
