import React from 'react'
import { Link } from 'react-router-dom'


const CaptainDashboard = () => {
    return (
        <div className='h-screen '>
            <div className="fixed p-6 top-0 flex items-center justify-between w-screen">
                <img className='w-16' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />
                <Link to='/home' className="h-10 w-10 bg-white flex items-center justify-center rounded-full">
                    <i className="text-lg font-medium ri-logout-box-r-line"></i>
                </Link>
            </div>

            <div className="h-3/5">
                <img className='h-full w-full object-cover' src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif" alt="" />
            </div>

            <div className="h-2/5 p-6">
                <div className="flex items-center justify-between">
                    <div className="flex items-center justify-start gap-3">
                        <img className='h-10 w-10 rounded-full object-cover' src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?cs=srgb&dl=pexels-italo-melo-881954-2379005.jpg&fm=jpg" alt="" />
                        <h4 className="text-lg font-medium">Sneha Mondal</h4>
                    </div>
                    <div className="">
                        <h4 className="text-xl font-semibold">₹384.86</h4>
                        <p className="text-sm text-gray-600">Earned</p>
                    </div>
                </div>

                <div className="flex p-3 mt-6 bg-gray-100 rounded-xl justify-center gap-5 items-start">
                    <div className="text-center">
                        <i className="text-3xl mb-2 font-light ri-timer-2-line"></i>
                        <h5 className="text-lg font-medium">10.2</h5>
                        <p className="text=sm text-gray-600">Hours Online</p>
                    </div>
                    <div className="text-center">
                        <i className="text-3xl mb-2 font-light ri-speed-up-line"></i>
                        <h5 className="text-lg font-medium">10.2</h5>
                        <p className="text=sm text-gray-600">Hours Online</p>
                    </div>
                    <div className="text-center">
                        <i className="text-3xl mb-2 font-light ri-booklet-line"></i>
                        <h5 className="text-lg font-medium">10.2</h5>
                        <p className="text=sm text-gray-600">Hours Online</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default CaptainDashboard