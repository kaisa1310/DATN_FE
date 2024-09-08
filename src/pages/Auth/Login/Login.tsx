import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FcGoogle } from 'react-icons/fc'
import { FaFacebook } from 'react-icons/fa'
import { IoEyeOffSharp, IoEyeSharp } from 'react-icons/io5'

import config from '~/config'
import Input from '~/components/ui/input/Input'
import { Button } from '~/components/ui/button/Button'

const Login = () => {
    const [showPassword, setShowPassword] = useState(false)

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword)
    }

    return (
        <div className="flex justify-center items-center h-full">
            <div className="w-full max-w-[456px] h-auto p-6 sm:p-8 md:p-10 lg:p-12 rounded-2xl shadow mt-[100px] bg-white">
                <div>
                    <h1 className="font-bold text-DSM text-center">Đăng nhập</h1>
                    <p className="my-5 text-center text-gray-400">
                        Bạn chưa có tài khoản?
                        <Link className="text-callouts-background-primary" to={config.routes.register}>
                            {' '}
                            Đăng ký
                        </Link>
                    </p>
                </div>
                <div className="flex gap-3 justify-center mb-3">
                    <div className="w-20 h-10 sm:w-24 sm:h-11 rounded-xl py-2 px-6 border cursor-pointer bg-white hover:bg-opacity-60">
                        <FaFacebook className="w-6 h-6 mx-auto text-callouts-background-primary" />
                    </div>
                    <div className="w-20 h-10 sm:w-24 sm:h-11 rounded-xl py-2 px-6 border cursor-pointer bg-white hover:bg-opacity-60">
                        <FcGoogle className="w-6 h-6 mx-auto" />
                    </div>
                </div>
                <div className="flex items-center justify-center my-6">
                    <div className="w-10 border-t border-gray-300 flex-grow ms-6 me-2"></div>
                    <span className="text-gray-400">hoặc đăng nhập email</span>
                    <div className="w-10 border-t border-gray-300 flex-grow ms-2 me-6"></div>
                </div>
                <div className="flex items-center justify-center">
                    <form action="" className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto">
                        <div className="w-full mb-4">
                            <label htmlFor="email" className="font-medium text-TMD">
                                Email
                            </label>
                            <Input type="text" placeholder="Email" name="email" id="email" className="w-full mt-2" />
                        </div>
                        <div className="w-full relative mb-4">
                            <label htmlFor="password" className="font-medium text-TMD">
                                Mật khẩu
                            </label>
                            <Input
                                type={showPassword ? 'text' : 'password'} // Thay đổi type dựa trên state
                                name="password"
                                id="password"
                                placeholder="Mật khẩu"
                                className="w-full mt-2"
                            />
                            {showPassword ? (
                                <IoEyeOffSharp
                                    onClick={togglePasswordVisibility}
                                    className="absolute right-3 top-1/2 transform translate-y-1/2 cursor-pointer text-gray-500"
                                />
                            ) : (
                                <IoEyeSharp
                                    onClick={togglePasswordVisibility}
                                    className="absolute right-3 top-1/2 transform translate-y-1/2 cursor-pointer text-gray-500"
                                />
                            )}
                        </div>
                        <div className="flex justify-between items-center mb-4">
                            <div className="flex items-center">
                                <Input
                                    type="checkbox"
                                    className=" w-3 h-3  bg-gray-100 border-gray-300 rounded focus:ring-1 focus:ring-blue-500"
                                    id="agree"
                                />
                                <label
                                    htmlFor="agree"
                                    className="ml-2 text-TSM text-gray-400 font-medium cursor-pointer"
                                >
                                    Ghi nhớ tài khoản
                                </label>
                            </div>
                            <div>
                                <Link
                                    to={config.routes.forgotPassword}
                                    className="text-callouts-background-primary font-medium text-TSM"
                                >
                                    Quên mật khẩu?
                                </Link>
                            </div>
                        </div>
                        <div>
                            <Button className="w-full">Đăng nhập</Button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login
