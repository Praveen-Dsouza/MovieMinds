import React from "react";
import { useNavigate } from "react-router";

const Error = () => {
    const navigate = useNavigate();
    const handleBackToHome = () => navigate('/')

    return(
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-3xl md:text-5xl font-bold mb-1 md:mb-2 text-red-700">404 - Page Not Found</h1>
            <p className="text-lg md:text-xl mb-2 md:mb-4 font-semibold">The page you are looking for does not exist.</p>
            <button className="py-1 md:py-2 px-1 md:px-4 m-2 md:m-4 bg-blue-800 text-white font-semibold text-sm md:text-lg rounded-md md:rounded-lg" onClick={handleBackToHome}>Back To Home</button>
        </div>
    )
}

export default Error;