import React, { useState } from 'react'
import { useForm } from "react-hook-form"
import { useDispatch } from 'react-redux'
import { login as authLogin } from '../store/authSlice'
import { useNavigate } from 'react-router'
import { Link } from 'react-router-dom'
import { Logo, Input, Button } from '../components/UI/index'
import authService from '../appwrite/auth'

function LoginComp() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { register, handleSubmit } = useForm()
    const [error, setError] = useState("")

    const login = async (data) => {
        setError("")
        try {
            const loggedInUserData = await authService.login(data)
            if (loggedInUserData) {
                const userData = await authService.getCurrentUser()
                if (userData) {
                    dispatch(authLogin(userData))
                    navigate("/")
                }
            }
        } catch (error) {
            setError(error.message)
        }
    }

    return (
        <div className="flex items-center justify-center w-full">
            <div className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}>
                <div className="mb-2 flex justify-center">
                    <span className="inline-block w-full max-w-[100px]">
                        <Logo />
                    </span>
                </div>
                <h2 className="text-center text-2xl font-bold leading-tight">Log in to your account</h2>
                <p className="mt-2 text-center text-base text-black/60">
                    Don&apos;t have any account?&nbsp;
                    <Link
                        to="/signup"
                        className="font-medium text-primary transition-all duration-200 hover:underline"
                    >
                        Sign Up
                    </Link>
                </p>
                {error && <p className="text-red-600 mt-8 text-center">{error}</p>}
                <form onSubmit={handleSubmit(login)} className="mt-8">
                    <div className="space-y-5">
                        <div className='space-y-2'>
                        <Input
                            label="Email : "
                            placeholder="Email Address"
                            type="email"
                            {...register("email", {
                                required: true,

                            })}
                        />
                        <p className='text-sm'>Test Email : <span className='text-blue-600 '>test@test.com</span> </p>
                        </div>
                        
                        <div className='space-y-2'>
                        <Input
                            label="Password : "
                            type="password"
                            placeholder="Password"
                            {...register("password", { required: true })}
                        />
                        <p className='text-sm '>Test Password : <span className='text-blue-600'>12345678 </span></p>
                        </div>
                        <Button type="submit" className="w-full font-bold">
                            Login{" "}
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default LoginComp