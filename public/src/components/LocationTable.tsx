

function LocationTable() {
    return(
    <div 
    className="absolute z-50 left-0 py-8 right-0 top-50 m-auto w-[70%] flex flex-col items-center text-center bg-white rounded-xl">

        <div> 
         <h2 className="text-gray-500 text-sm mt-5 font-semibold">IP Address</h2>
         <p className="text-lg text-gray-800 font-bold">192.212.174.101</p>
        </div>

        <div>
        <h2 className="text-gray-500 text-sm mt-5 font-semibold">Location</h2>
        <p className="text-lg text-gray-800 font-bold">Brooklyn, NY 10001</p>
        </div>

        <div>
        <h2 className="text-gray-500 text-sm mt-5 font-semibold">Timezone</h2>
        <p className="text-lg text-gray-800 font-bold">UTC -05:00</p>
        </div>
        
        <div>
        <h2 className="text-gray-500 text-sm mt-5 font-semibold">ISP</h2>
        <p className="text-lg text-gray-800 mb-5 font-bold">SpaceX Starlink</p>
        </div>

        </div>
    )
}

export default LocationTable;