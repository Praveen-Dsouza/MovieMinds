import React from 'react'

const VideoTitle = ({ title, description }) => {
    return (
        <div className='pt-36 px-12'>
            <h1 className='text-6xl font-bold'>{title}</h1>
            <p className='py-6 text-lg w-1/4'>{description}</p>
            <div className='col-12'>
                <button className='bg-white-500 text-black py-4 px-10 text-lg bg-opacity-50 rounded-lg'>▶️ Play</button>
                <button className='mx-2 bg-gray-500 text-white py-4 px-10 text-lg bg-opacity-50 rounded-lg'>ℹ️ More Info</button>
            </div>
        </div>
    )
}

export default VideoTitle
