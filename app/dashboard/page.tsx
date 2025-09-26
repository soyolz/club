// THE DASHBOARD FOR THE PARTY VIEW EVERYTHING FALLS UNDER HERE
import PartyBox from "../components/PartyBox";
import UserInfo from "../components/UserInfo";
import TopBar from "../components/TopBar";

export default function Home() {
return (
    <div className="min-h-screen flex items-center justify-center px-4">
        <PartyBox>
            <UserInfo />
            <TopBar />
            {/* later add TopBar, ViewScreen, IconGuide here */}
        </PartyBox>
    </div>
);
}