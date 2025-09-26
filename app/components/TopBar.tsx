'use client'

// Selector

import { useState } from "react"

//XBOX LIVE PARTY 
//FRIENDS
//MAIL
//CONTROLLER

const tabs = ["Party", "Friends", "Mail"]

export default function TopBar() {

    const [activeTab, setActiveTab] = useState("Party")

    return(
        //community profile picture and time
        
        <div className="flex gap-6">
    {tabs.map((tab) => (
        <button key={tab} onClick={() => setActiveTab(tab)} className={`transition-all ${ activeTab === tab
                ? "text-white scale-110 font-bold"
                : "text-white/60 hover:text-white"
            }`}
            >
            {tab}
        </button>
            ))}
        </div>
    )
}