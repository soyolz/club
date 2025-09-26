// THE MAIN FRAME



export default function PartyBox({ children }: { children: React.ReactNode }) {
    return (
    <div className="flex flex-col gap-3 md:gap-4 w-full max-w-md md:max-w-xl lg:max-w-2xl xl:max-w-3xlbg-neutral-800/80 
    backdrop-blur rounded-lg p-4 md:p-6">
        {children}
    </div>
    );
}
