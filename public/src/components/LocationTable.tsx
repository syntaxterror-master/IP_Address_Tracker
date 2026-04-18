import type { Location} from "../types/Location";

interface LocationTableProps {
    locationData: Location | null
}

function LocationTable({ locationData }: LocationTableProps) {
    
    return(
    <div 
    className="absolute z-50 left-0 py-8 right-0 top-50 m-auto w-[70%] flex flex-col lg:flex-row lg:justify-around justify-center justify-items-start text-center bg-white rounded-xl">

        <div> 
         <h2 className="text-gray-500 text-sm mt-5 font-semibold">IP Address</h2>
         <p className="text-lg text-gray-800 font-bold">{locationData?.ip || "192.212.174.101"}</p>
        </div>

        <div> 
         <h2 className="text-gray-500 text-sm mt-5 font-semibold">IP Address</h2>
         <p className="text-lg text-gray-800 font-bold">{locationData?.as.domain || "www.example.com"}</p>
        </div>

        <div>
        <h2 className="text-gray-500 text-sm mt-5 font-semibold">Location</h2>
        <p className="text-lg text-gray-800 font-bold">{locationData?.location?.city || "Brooklyn"}, {locationData?.location?.region || "NY"} {locationData?.location?.postalCode || "10001"}</p>
        </div>

        <div>
        <h2 className="text-gray-500 text-sm mt-5 font-semibold">Timezone</h2>
        <p className="text-lg text-gray-800 font-bold">{locationData?.location?.timezone || "UTC -05:00"}</p>
        </div>
        
        <div>
        <h2 className="text-gray-500 text-sm mt-5 font-semibold">ISP</h2>
        <p className="text-lg text-gray-800 mb-5 font-bold">{ locationData ?  locationData?.isp || "Not Found" : "SpaceX Starlink"}</p>
        </div>

        </div>
    )
}

export default LocationTable;