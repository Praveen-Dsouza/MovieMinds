import React from 'react'

const VideoTitle = ({ title, description }) => {
    return (
        <div className='w-full aspect-video pt-[15%] px-6 md:px-24 absolute text-white bg-gradient-to-r from-black'>
            <h1 className='text-5xl font-bold'>{title}</h1>
            <p className='py-6 text-lg w-1/3'>{description}</p>
            <div className='col-12 my-4'>
                <button className='bg-white text-black py-3 px-9 text-lg rounded-lg hover:bg-opacity-80'>
                    ▶️ Play
                </button>
                <button className='mx-2 bg-gray-500 text-white py-3 px-9 text-lg bg-opacity-50 rounded-lg hover:bg-opacity-80'>
                    ℹ️ More Info
                </button>
            </div>
        </div>
    )
}

export default VideoTitle
