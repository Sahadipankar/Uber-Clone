import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { CaptainDataContext } from '../Context/CaptainContext'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import XpresslyLogo from '../Components/XpresslyLogo'

const CaptainSignUp = () => {
    const navigate = useNavigate()

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [vehicleColor, setVehicleColor] = useState('')
    const [vehiclePlate, setVehiclePlate] = useState('')
    const [vehicleCapacity, setVehicleCapacity] = useState('')
    const [vehicleType, setVehicleType] = useState('')

    const { captain, setCaptain } = React.useContext(CaptainDataContext)

    const submitHandler = async (e) => {
        e.preventDefault()

        const captainData = {
            fullname: {
                firstname: firstName,
                lastname: lastName
            },
            email: email,
            password: password,
            vehicle: {
                color: vehicleColor,
                plate: vehiclePlate,
                capacity: vehicleCapacity,
                vehicleType: vehicleType
            }
        }

        const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/register`, captainData)

        if (response.status === 201) {
            const data = response.data
            setCaptain(data.captain)
            localStorage.setItem('token', data.token)
            navigate('/captain-dashboard')
        }

        setFirstName('')
        setLastName('')
        setEmail('')
        setPassword('')
        setVehicleColor('')
        setVehiclePlate('')
        setVehicleCapacity('')
        setVehicleType('')
    }

    return (
        <div className='min-h-screen bg-gradient-to-br from-emerald-900 via-green-900 to-teal-900 relative overflow-hidden'>
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-green-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
                <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-emerald-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
                <div className="absolute top-40 left-40 w-80 h-80 bg-teal-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
            </div>

            {/* Floating Car Icons */}
            <div className="absolute inset-0">
                {[...Array(15)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute text-white/10 animate-float"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 3}s`,
                            animationDuration: `${4 + Math.random() * 2}s`
                        }}
                    >
                        <i className="ri-car-line text-2xl"></i>
                    </div>
                ))}
            </div>

            <div className='relative z-10 flex flex-col justify-center min-h-screen px-6 py-8 lg:px-8'>
                <div className='sm:mx-auto sm:w-full sm:max-w-lg'>
                    {/* Enhanced Captain Branding Section */}
                    <div className='flex flex-col items-center mb-8'>
                        <div className='relative mb-6'>
                            <div className='absolute inset-0 bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500 rounded-full blur-lg opacity-75 animate-pulse'></div>
                            <div className='relative flex items-center gap-4 bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20'>
                                <div className='relative'>
                                    <XpresslyLogo className="w-14 h-14 md:w-16 md:h-16 drop-shadow-lg" />
                                    <div className='absolute -top-2 -right-2 w-6 h-6 bg-green-400 rounded-full animate-pulse flex items-center justify-center'>
                                        <i className="ri-steering-2-line text-white text-xs"></i>
                                    </div>
                                </div>
                                <div>
                                    <h1 className="text-3xl md:text-4xl font-black bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 bg-clip-text text-transparent drop-shadow-sm">
                                        Xpressly
                                    </h1>
                                    <div className='flex items-center gap-2 mt-1'>
                                        <div className='w-2 h-2 bg-green-400 rounded-full animate-pulse'></div>
                                        <span className='text-white/80 text-sm font-medium'>Captain Signup</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='text-center'>
                            <p className="text-lg md:text-xl font-semibold text-white/90 italic tracking-wide">
                                "Ride Smart. On Time. Every Time."
                            </p>
                            <div className='flex items-center justify-center gap-4 mt-4'>
                                <div className='flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-3 py-1'>
                                    <i className="ri-money-dollar-circle-line text-green-400"></i>
                                    <span className='text-white/80 text-sm'>Earn ₹25K+/month</span>
                                </div>
                                <div className='flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-3 py-1'>
                                    <i className="ri-time-line text-emerald-400"></i>
                                    <span className='text-white/80 text-sm'>Flexible Hours</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Enhanced Captain Signup Form */}
                    <div className='relative'>
                        <div className='absolute inset-0 bg-gradient-to-r from-white/20 to-white/10 rounded-3xl blur-xl'></div>
                        <div className='relative bg-white/95 backdrop-blur-xl py-8 px-8 shadow-2xl rounded-3xl border border-white/20 max-h-[75vh] overflow-y-auto'>
                            <div className='mb-6'>
                                <div className='flex items-center justify-center gap-3 mb-4'>
                                    <div className='p-3 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl'>
                                        <i className="ri-user-add-line text-white text-2xl"></i>
                                    </div>
                                    <div>
                                        <h2 className='text-2xl font-bold text-gray-900'>
                                            Become a Captain
                                        </h2>
                                        <p className='text-green-600 font-semibold text-sm'>
                                            Start Earning Today
                                        </p>
                                    </div>
                                </div>
                                <p className='text-center text-gray-600'>
                                    Join thousands of captains earning with Xpressly
                                </p>
                            </div>

                            <form onSubmit={(e) => submitHandler(e)} className='space-y-5'>
                                {/* Personal Information */}
                                <div className='bg-gray-50 rounded-2xl p-4 border-l-4 border-blue-500'>
                                    <h3 className='font-bold text-gray-800 mb-3 flex items-center gap-2'>
                                        <i className="ri-user-line text-blue-600"></i>
                                        Personal Information
                                    </h3>
                                    <div className='grid grid-cols-2 gap-3 mb-4'>
                                        <div>
                                            <label className='block text-xs font-bold text-gray-700 mb-1'>First Name</label>
                                            <input
                                                className='w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-100 text-sm bg-white placeholder-gray-400'
                                                required
                                                type="text"
                                                placeholder='John'
                                                value={firstName}
                                                onChange={(e) => setFirstName(e.target.value)}
                                            />
                                        </div>
                                        <div>
                                            <label className='block text-xs font-bold text-gray-700 mb-1'>Last Name</label>
                                            <input
                                                className='w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-100 text-sm bg-white placeholder-gray-400'
                                                required
                                                type="text"
                                                placeholder='Doe'
                                                value={lastName}
                                                onChange={(e) => setLastName(e.target.value)}
                                            />
                                        </div>
                                    </div>
                                    <div className='mb-4'>
                                        <label className='block text-xs font-bold text-gray-700 mb-1'>
                                            <i className="ri-mail-line mr-1"></i>Email Address
                                        </label>
                                        <input
                                            className='w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 text-sm bg-white placeholder-gray-400'
                                            required
                                            type="email"
                                            placeholder='captain@example.com'
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                        />
                                    </div>
                                    <div>
                                        <label className='block text-xs font-bold text-gray-700 mb-1'>
                                            <i className="ri-lock-line mr-1"></i>Password
                                        </label>
                                        <input
                                            className='w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 text-sm bg-white placeholder-gray-400'
                                            required
                                            type="password"
                                            placeholder='Create a strong password'
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                        />
                                    </div>
                                </div>

                                {/* Vehicle Information */}
                                <div className='bg-green-50 rounded-2xl p-4 border-l-4 border-green-500'>
                                    <h3 className='font-bold text-gray-800 mb-3 flex items-center gap-2'>
                                        <i className="ri-car-line text-green-600"></i>
                                        Vehicle Information
                                    </h3>
                                    <div className='grid grid-cols-2 gap-3 mb-4'>
                                        <div>
                                            <label className='block text-xs font-bold text-gray-700 mb-1'>Vehicle Color</label>
                                            <input
                                                className='w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-100 text-sm bg-white placeholder-gray-400'
                                                required
                                                type="text"
                                                placeholder='White'
                                                value={vehicleColor}
                                                onChange={(e) => setVehicleColor(e.target.value)}
                                            />
                                        </div>
                                        <div>
                                            <label className='block text-xs font-bold text-gray-700 mb-1'>License Plate</label>
                                            <input
                                                className='w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-100 text-sm bg-white placeholder-gray-400 uppercase'
                                                required
                                                type="text"
                                                placeholder='MH01AB1234'
                                                value={vehiclePlate}
                                                onChange={(e) => setVehiclePlate(e.target.value.toUpperCase())}
                                            />
                                        </div>
                                    </div>
                                    <div className='grid grid-cols-2 gap-3'>
                                        <div>
                                            <label className='block text-xs font-bold text-gray-700 mb-1'>Capacity (Seats)</label>
                                            <input
                                                className='w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-100 text-sm bg-white placeholder-gray-400'
                                                required
                                                type="number"
                                                min="1"
                                                max="8"
                                                placeholder='4'
                                                value={vehicleCapacity}
                                                onChange={(e) => {
                                                    const value = e.target.value;
                                                    if (value === '' || (Number(value) > 0 && Number(value) <= 8)) {
                                                        setVehicleCapacity(value);
                                                    }
                                                }}
                                            />
                                        </div>
                                        <div>
                                            <label className='block text-xs font-bold text-gray-700 mb-1'>Vehicle Type</label>
                                            <select
                                                className='w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-100 text-sm bg-white'
                                                required
                                                value={vehicleType}
                                                onChange={(e) => setVehicleType(e.target.value)}
                                            >
                                                <option value="" disabled>Select Type</option>
                                                <option value="Car">🚗 Car</option>
                                                <option value="Auto">🛺 Auto Rickshaw</option>
                                                <option value="Moto">🏍️ Motorcycle</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>

                                <div className='flex items-center gap-2 text-sm'>
                                    <input type="checkbox" className='rounded border-gray-300 text-green-600 focus:ring-green-500' required />
                                    <span className='text-gray-600'>
                                        I agree to the Captain
                                        <a href="#" className='text-green-600 hover:text-green-500 font-semibold mx-1'>Terms & Conditions</a>
                                        and have valid documents
                                    </span>
                                </div>

                                <button
                                    type='submit'
                                    className='relative w-full bg-gradient-to-r from-green-600 via-emerald-600 to-green-600 hover:from-green-700 hover:via-emerald-700 hover:to-green-700 text-white font-bold py-4 px-6 rounded-2xl transition-all duration-300 transform hover:scale-[1.02] hover:shadow-2xl group overflow-hidden'
                                >
                                    <div className='absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700'></div>
                                    <div className='relative flex items-center justify-center gap-3'>
                                        <div className='p-1 bg-white/20 rounded-lg'>
                                            <i className="ri-steering-2-line text-xl"></i>
                                        </div>
                                        <span className='text-lg'>Join as Captain</span>
                                    </div>
                                </button>
                            </form>

                            <div className='mt-6'>
                                <div className='relative'>
                                    <div className='absolute inset-0 flex items-center'>
                                        <div className='w-full border-t border-gray-300'></div>
                                    </div>
                                    <div className='relative flex justify-center text-sm'>
                                        <span className='px-4 bg-white text-gray-500 font-medium'>Already a Captain?</span>
                                    </div>
                                </div>
                                <div className='mt-4'>
                                    <Link to='/captain-login' className='w-full flex items-center justify-center gap-3 px-6 py-3 border-2 border-gray-300 rounded-2xl text-gray-700 bg-white hover:bg-gray-50 hover:border-green-400 hover:text-green-600 transition-all duration-200 font-semibold group'>
                                        <i className="ri-login-circle-line text-lg group-hover:scale-110 transition-transform"></i>
                                        Sign In Instead
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Privacy Notice */}
                    <div className='mt-6 text-center'>
                        <p className='text-xs text-white/60 leading-relaxed'>
                            This site is protected by reCAPTCHA and the Google
                            <a href="#" className='underline hover:text-white/80 transition-colors mx-1'>Privacy Policy</a>
                            and
                            <a href="#" className='underline hover:text-white/80 transition-colors ml-1'>Terms of Service</a>
                            apply.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CaptainSignUp