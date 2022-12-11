import React from 'react'
import { MdPersonAdd, MdOutlineSearch, MdForum, MdPhone, MdDriveFolderUpload, MdOutlineMoreHoriz, MdFacebook } from 'react-icons/md'
import { TiSocialPinterest } from 'react-icons/ti'
import { AiFillLinkedin, AiOutlineInstagram, AiOutlineTwitter } from 'react-icons/ai'

export const Content = () => {
  return (
    <div className='flex-1'>
      <div className='flex justify-end items-center px-8 space-x-2 border-b border-b-gray-200 h-20'>
        <div className="bg-white p-2 rounded-lg border border-gray-200">
          <MdPersonAdd size={20} />
        </div>
        <div className='border-r border-r-gray-200 h-6' />
        <div className="bg-white p-2 rounded-lg border border-gray-200">
          <MdOutlineSearch size={20} />
        </div>
        <img src='https://images.pexels.com/photos/1382731/pexels-photo-1382731.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='profile' className='w-10 h-10 rounded-lg object-cover' />
      </div>
      <div className='ml-36 mt-32 mb-9 flex flex-row'>
        <img src='https://images.pexels.com/photos/1391495/pexels-photo-1391495.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='profile' className='w-28 h-28 object-cover rounded-3xl' />
        <div className='flex flex-col ml-6'>
          <span className='text-sm font-bold'>Johanna Stevens</span>
          <span className='mb-5 font-light'>UI/UX Designer</span>
          <div className='flex flex-row items-center space-x-2'>
            <button className='flex items-center px-2 py-2 bg-violet-500 rounded-md justify-center text-white'>
              <MdForum />
              <span>Message</span>
            </button>
            <button className="bg-white p-2 rounded-lg border border-gray-200">
              <MdPhone size={20} />
            </button>
            <button className="bg-white p-2 rounded-lg border border-gray-200">
              <MdDriveFolderUpload size={20} />
            </button>
            <button className="bg-white p-2 rounded-lg border border-gray-200">
              <MdOutlineMoreHoriz size={20} />
            </button>
          </div>
        </div>
      </div>
      <div className='px-10'>
        <table>
          <tr>
            <td className='w-1/5 text-right pr-5 align-top text-gray-400'>Bio</td>
            <td>When I First got into the advertising, I was looking for the magical combination that would put website into the top search engine rankings</td>
          </tr>
          <tr>
            <td className='w-1/5 text-right pr-5 align-top text-gray-400'>Email</td>
            <td>
              <div className='flex items-center'>
                <span className='flex-1'>johanna.stevens@gmail.com</span>
                <button className='bg-gray-100 border border-gray-200 py-1 px-3 rounded-md text-xs font-normal'>Primary</button>
              </div>
              <span className='flex-1'>johanna.stevens@gmail.com</span>
            </td>
          </tr>
          <tr>
            <td className='w-1/5 text-right pr-5 align-top text-gray-400'>Dial</td>
            <td>j.stevens@ymsg.com</td>
          </tr>
          <tr>
            <td className='w-1/5 text-right pr-5 align-top text-gray-400'>Meeting</td>
            <td>http://go.betacall.com/meet/j.stevens</td>
          </tr>
          <tr>
            <td className='w-1/5 text-right pr-5 align-top text-gray-400'>Phone</td>
            <td>
              <div className='flex items-center'>
                <span className='flex-1'>431-582-1578</span>
                <button className='bg-gray-100 border border-gray-200 py-1 px-3 rounded-md text-xs font-normal'>Primary</button>
              </div>
              <span className='flex-1'>621-770-7689</span>
            </td>
          </tr>
          <tr>
            <td className='w-1/5 text-right pr-5 align-top text-gray-400'>social</td>
            <td className='flex flex-row space-x-1'>
              <button className="bg-white p-2 rounded-lg border border-gray-200"><MdFacebook size={20} /></button>
              <button className="bg-white p-2 rounded-lg border border-gray-200"><AiOutlineTwitter size={20} /></button>
              <button className="bg-white p-2 rounded-lg border border-gray-200"><TiSocialPinterest size={20} /></button>
              <button className="bg-white p-2 rounded-lg border border-gray-200"><AiOutlineInstagram size={20} /></button>
              <button className="bg-white p-2 rounded-lg border border-gray-200"><AiFillLinkedin size={20} /></button>
            </td>
          </tr>
        </table>
      </div>
    </div>
  )
}
