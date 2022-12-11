import React from 'react'
import { MdNotes, MdKeyboardArrowLeft, MdKeyboardArrowRight, MdOutlineSearch, MdForum, MdPhone, MdMoreHoriz } from 'react-icons/md'

export const SubSidebar = () => {
    const users = [
        {
            imgUrl:'https://images.pexels.com/photos/1382734/pexels-photo-1382734.jpeg?auto=compress&cs=tinysrgb&w=600',
            name:'Nicky',
            isActive:true,
            status:'Mobile Developer'
        },
        {
            imgUrl:'https://images.pexels.com/photos/1308885/pexels-photo-1308885.jpeg?auto=compress&cs=tinysrgb&w=600',
            name:'Far',
            isActive:true,
            status:'Software Engineer'
        },
        {
            imgUrl:'https://images.pexels.com/photos/1468379/pexels-photo-1468379.jpeg?auto=compress&cs=tinysrgb&w=600',
            name:'Sal',
            isActive:true,
            status:'UI/UX Designer'
        },
        {
            imgUrl:'https://images.pexels.com/photos/1382728/pexels-photo-1382728.jpeg?auto=compress&cs=tinysrgb&w=600',
            name:'Zahra',
            isActive:false,
            status:'Front End Dev'
        },
        {
            imgUrl:'https://images.pexels.com/photos/884979/pexels-photo-884979.jpeg?auto=compress&cs=tinysrgb&w=600',
            name:'Siti',
            isActive:false,
            status:'Back End Dev'
        },
        {
            imgUrl:'https://images.pexels.com/photos/675920/pexels-photo-675920.jpeg?auto=compress&cs=tinysrgb&w=600',
            name:'Nisa',
            isActive:true,
            status:'Full Stack Dev'
        },
        {
            imgUrl:'https://images.pexels.com/photos/1898555/pexels-photo-1898555.jpeg?auto=compress&cs=tinysrgb&w=600',
            name:'Dinda',
            isActive:false,
            status:'Manager'
        },
    ]

    return (
        <div className='bg-violet-50 w-2/5'>
            <div className='flex flex-row border-b border-b-gray-200 items-center px-8 h-20'>
                <div className='flex-1 flex flex-row items-center'>
                    <div className='border border-gray-200 rounded-md bg-white p-2 mr-4'>
                        <MdNotes size={25} />
                    </div>
                    <h3 className="text-xl">Contacts</h3>
                </div>
                <div className='space-x-2 flex items-center'>
                    <div className='border border-gray-200 rounded-md bg-white p-2'>
                        <MdKeyboardArrowLeft size={20} />
                    </div>
                    <div className='border border-gray-200 rounded-md bg-white p-2'>
                        <MdKeyboardArrowRight size={20} />
                    </div>
                </div>
            </div>
            <div className='px-8 pt-7'>
                <span className='text-sm font-normal text-gray-400'>Search for a contact</span>
                <div className='flex flex-row'>
                    <span className='flex-1 text-base font-bold text-gray-800'>Name, email or phone number</span>
                    <MdOutlineSearch size={20} />
                </div>
                <div className='space-y-3 mt-5'>
                    {
                        users.map((val, index) => {
                            return <User key={index} {...val} />
                        })
                    }
                </div>
            </div>
        </div>
    )
}

function User({imgUrl, isActive, name, status}) {
    return (
        <div className='flex flex-row'>
            <div className='w-9 h-9 mr-4 relative'>
                <img src={imgUrl} className="w-9 h-9 object-cover rounded-xl" alt='profile' />
                <span className={`w-3 h-3 rounded-full ${isActive ? "bg-green-500" : "bg-orange-400"} absolute right-0 bottom-0 border-2 border-white`}></span>
            </div>
            <div className='flex-1 flex flex-col'>
                <span className='font-bold text-sm'>{name}</span>
                <span className='font-light text-sm text-gray-400'>{status}</span>
            </div>
            <div className='flex flex-row space-x-2 items-center'>
                <div className="bg-white p-2 rounded-lg border border-gray-200">
                <MdForum size={20} className="text-gray-500" />
                </div>
                <div className="bg-white p-2 rounded-lg border border-gray-200">
                <MdPhone size={20} className="text-gray-500" />
                </div>
                <div className="bg-white p-2 rounded-lg border border-gray-200">
                <MdMoreHoriz size={20} className="text-gray-500" />
                </div>
            </div>
        </div>
    )
}
