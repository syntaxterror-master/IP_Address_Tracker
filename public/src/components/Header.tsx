

function Header(){
    return (
        <header className="bg-[url(./assets/images/pattern-bg-mobile.png)] bg-no-repeat bg-cover h-[300px] flex flex-col items-center text-white">
        <h1 className="font-semibold text-3xl mt-10">IP Address Tracker</h1>

        <div className="flex items-center justify-center w-[90%] mt-5">

        <input 
        type="search" 
        placeholder="Search for any IP address or domain" 
        className="no-search-x mt-5 cursor-pointer w-130 h-15 px-4 font-bold py-2 bg-white text-md text-gray-500 placeholder:text-gray-500 rounded-l-xl focus:outline-none focus:ring-2 focus:ring-gray-500" />


        <button 
        className="mt-5 h-15 cursor-pointer rounded-r-xl bg-black text-white px-5 py-2 rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500">

        <img 
        className="h-5"
        src="../../assets/images/icon-arrow.svg" 
         alt="Search Arrow Button" />

        </button>
        </div>

        </header>

    )
}

export default Header;