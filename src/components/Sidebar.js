import React from 'react'
import { MdHome, MdMic, MdForum, MdPhone, MdDevicesOther, MdSupervisedUserCircle, MdDriveFolderUpload, MdOutlineCalendarToday, MdSettings } from 'react-icons/md'

export const Sidebar = () => {

    return (
        <nav className="px-5 bg-white border-r border-r-gray-200 h-screen">
            <div className="bg-violet-600 w-10 h-10 rounded-2xl flex items-end justify-center pt-6">
                <MdMic size={30} color="white" />
            </div>
            <ul className="flex flex-col justify-center items-center mt-20 text-custom">
                <li className='py-4'>
                    <MdHome size={25} />
                </li>
                <li className='py-5 relative'>
                    <span className='w-3 h-3 rounded-full bg-green-500 absolute -right-4 top-2' />
                    <MdForum size={25} />
                </li>
                <li className='py-5 relative'>
                    <span className='w-3 h-3 rounded-full bg-green-500 absolute -right-4 top-2' />
                    <MdPhone size={25} />
                </li>
                <li className='py-5'>
                    <MdDevicesOther size={25} />
                </li>
                <li className='py-5'>
                    <MdSupervisedUserCircle size={25} />
                </li>
                <li className='py-5'>
                    <MdDriveFolderUpload size={25} />
                </li>
                <li className='py-5'>
                    <MdOutlineCalendarToday size={25} />
                </li>
                <li className='py-5'>
                    <MdSettings size={25} />
                </li>
            </ul>
        </nav>
    )
}
