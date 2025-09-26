// top porty portion 
'use client'
import { useState, useEffect } from "react";

function Clock() {
    const [time, setTime] = useState<Date | null>(null);
    const [showColon, setShowColon] = useState<boolean>(true);

    useEffect(() => {
    setTime(new Date());

    const intervalId: NodeJS.Timeout = setInterval(() => {
    setTime(new Date());
    setShowColon((prev) => !prev);
    }, 1000);

    return () => clearInterval(intervalId);
}, []);

if (!time) return <span>Loading...</span>;

function formatTime() {
    let hours = time.getHours();
    const minutes = time.getMinutes();
    const meridian = hours >= 12 ? "PM" : "AM";

    hours = hours % 12 || 12;
    const formattedMinutes = minutes.toString().padStart(2, "0");
    const colon = showColon ? ":" : " ";

    return `${hours}${colon}${formattedMinutes} ${meridian}`;
}

return <h1>{formatTime()}</h1>;
}



export default function UserInfo() {
    return(
        //community profile picture and time
    <div className="flex justify-center text-white">
      {/* profile pic + name on the left */}
        <div className="flex items-center gap-50">
            <span>Community</span>

            <div className="w-8 h-8 bg-gray-600 rounded-full" /> 
            
            <Clock />   
        </div>
        {/* clock on the right */}
    </div>
    )
}