'use client'

import { useState, useEffect} from "react"


///CLOCK

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
///changed how the clock works
        hours = hours % 12 || 12;
        const formattedMinutes = minutes.toString().padStart(2, "0");
        const colon = <span className={showColon ? "opacity-100" : "opacity-0"}>:</span>;

        return <>{hours}{colon}{formattedMinutes} {meridian}</>;
    }

    return <h1 className="tabular-nums font-mono">{formatTime()}</h1>;
}

///TASKBAR
const tabs = ["Xbox Live Party", 
    "Friends", 
    "Mail",
    "Activity"]

//Views 

const views =
    {
    "Xbox Live Party": <PartyView />,
    "Friends": <FriendsView />,
    "Mail": <MailView />,
    "Activity": <ActivityView />
    }


function PartyView(){}
function FriendsView(){}
function MailView(){}
function ActivityView(){}

//CONFIGURE PAGES

export default function Dashboard() {


    function Taskbar(activeTab, onChange(tab)){
    const [activeTab, setActiveTab] = useState("Xbox Live Party")

    return (
        <div className="flex bg-[#F1F1FD] overflow-hidden">
            {tabs.map((tab) => (
                <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={
                        `flex-1 truncate px-4 py-2 text-center transition-colors ` +
                        (activeTab === tab
                            ? "flex-[4] bg-[#F8F7FF] text-black"
                            : "flex-1 bg-[#49586D] text-white cursor-pointer"
                        )
                    }
                >
                    {tab}
                </button>
            ))}
        </div>
    )
}
    return (
        <div className="flex flex-col justify-center text-white">

            {/* profile pic + name on the left */}
            <div className="flex gap-50 ">
                <span>Community</span>
                <div className="w-8 h-8 bg-gray-600 rounded-full"/>
                <Clock/>
                {/* clock on the right */}
            </div>

            <div className="w-full max-w-3xl bg-[#F1F1FD]">

                {/* Xbox UI header bar */}
                <div className="">
                    <Taskbar/>
                </div>

                <div className="mx-auto w-full max-w-xl rounded-xl bg-[#F8F7FF] p-6 shadow-sm">
                    <div className="text-gray-800">
                        {views[activeTab]}
                    </div>
                </div>
            </div>
        </div>
    )
}