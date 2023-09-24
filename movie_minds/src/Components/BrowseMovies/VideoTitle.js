import React from 'react'
import play from "../../Utils/Icons/play.png"
import info from "../../Utils/Icons/info.png"

const VideoTitle = ({ title, description }) => {
    return (
        <div className='w-full aspect-video pt-[10%] md:pt-[15%] px-6 md:px-24 absolute text-white bg-gradient-to-r from-black'>
            <h1 className='text-3xl md:text-5xl font-bold'>{title}</h1>
            <p className='py-3 md:py-6 text-[10px] leading-3 md:text-lg w-1/2 md:w-1/3'>{description}</p>
            <div className='flex col-12 my-2 md:my-4'>
                <button className='flex bg-white text-black py-1 md:py-3 px-4 md:px-9 text-sm md:text-lg rounded-md md:rounded-lg hover:bg-opacity-80'>
                    <img className='w-3 h-3 md:w-5 md:h-5 my-1 mx-1' src={play} alt="play_icon"/>
                    <span>Play</span>
                </button>
                <button className='flex mx-2 bg-gray-500 text-white py-1 md:py-3 px-4 md:px-9 text-sm md:text-lg bg-opacity-50 rounded-md md:rounded-lg hover:bg-opacity-80'>
                    <img className='w-3 h-3 md:w-5 md:h-5 my-1 mx-1 bg-opacity-50' src={info} alt="info_icon"/>
                    <span>More Info</span>
                </button>
            </div>
        </div>
    )
}

export default VideoTitle
