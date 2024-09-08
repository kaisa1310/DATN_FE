import { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '~/components/ui/button/Button'
import Input from '~/components/ui/input/Input'

const Verify = () => {
    const [code, setCode] = useState<string[]>(['', '', '', ''])

    // Sử dụng useRef để lưu các input, cho phép HTMLInputElement hoặc null
    const inputs = useRef<(HTMLInputElement | null)[]>([])

    // Thêm type cho e và index
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
        const value = e.target.value
        if (/^[0-9]$/.test(value)) {
            const newCode = [...code]
            newCode[index] = value
            setCode(newCode)
            // Kiểm tra ref trước khi gọi focus()
            if (index < inputs.current.length - 1 && inputs.current[index + 1]) {
                inputs.current[index + 1]?.focus()
            }
        }
    }

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
        if (e.key === 'Backspace') {
            if (code[index] === '') {
                if (index > 0 && inputs.current[index - 1]) {
                    inputs.current[index - 1]?.focus()
                }
            } else {
                const newCode = [...code]
                newCode[index] = ''
                setCode(newCode)
            }
        }
    }

    return (
        <div className="relative h-screen">
            <div className="w-full max-w-[400px] h-auto p-6 sm:p-8 rounded-2xl shadow-lg absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white">
                <div className="text-center">
                    <h1 className="font-bold text-2xl">Nhập mã xác nhận</h1>
                    <p className="my-4 text-gray-500">Chúng tôi đã gửi một mã xác nhận đến tài khoản email của bạn!</p>
                </div>
                <form className="flex flex-col items-center">
                    <span className="mb-3">Nhập mã tại đây</span>
                    <div className="flex gap-2 justify-center mb-6">
                        {code.map((digit, index) => (
                            <Input
                                key={index}
                                type="text"
                                maxLength={1}
                                value={digit}
                                onChange={(e) => handleChange(e, index)}
                                onKeyDown={(e) => handleKeyDown(e, index)}
                                ref={(el) => (inputs.current[index] = el)}
                                className="w-10 h-10 text-center text-xl border rounded-lg"
                            />
                        ))}
                    </div>
                    <Button className="w-full">Gửi</Button>
                    <p className="text-center text-gray-500 mt-4">
                        Không nhận được mã?{' '}
                        <Link to={''} className="text-blue-500">
                            Gửi lại
                        </Link>
                    </p>
                </form>
            </div>
        </div>
    )
}

export default Verify
