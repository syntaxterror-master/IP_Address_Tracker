import { useState } from "react";

interface HeaderProps {
    onClick?: (address: string) => Promise<void>;
}

function Header({ onClick }: HeaderProps){
    const [ address, setAddress ] = useState("")
    const [ error, setError ] = useState("");

    return (
        <header className="bg-[url(./assets/images/pattern-bg-mobile.png)] md:bg-[url(./assets/images/pattern-bg-desktop.png)] bg-no-repeat bg-cover h-[300px] flex flex-col items-center text-white">
        <h1 className="font-semibold text-3xl mt-10">IP Address Tracker</h1>

        <form 
        onSubmit={async (e) => {
            e.preventDefault();
            if (onClick) {
                await onClick(address);
            }

            if(!address.trim()){
                setError("Please enter a valid IP address or domain or email!");
                
                setTimeout(() => {
                    setError("");
                }, 3000);
                return;
            }

            setAddress("")
        }}
        className="flex items-center justify-center w-[90%] mt-5">

        <input
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        type="text" 
        placeholder={ error || "Search for any IP address or domain or email"}
        className={` ${error ? 'text-red-400 placeholder:text-red-400 focus:ring-red-400 btn-disabled': 'text-gray-500 placeholder:text-gray-500 focus:ring-gray-500'} no-search-x mt-5 cursor-pointer w-130 h-15 px-4 font-bold py-2 bg-white text-md rounded-l-xl focus:outline-none focus:ring-2`}/>


        <button
        {...error ? { disabled: true } : {}}
        type="submit"
        className={`${error ? "cursor-not-allowed" : "cursor-pointer"} mt-5 h-15 rounded-r-xl bg-black text-white px-5 py-2 rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500`}>

        <img 
        className="h-5"
        src="../../assets/images/icon-arrow.svg" 
         alt="Search Arrow Button" />

        </button>
        </form>

        </header>

    )
}

export default Header;