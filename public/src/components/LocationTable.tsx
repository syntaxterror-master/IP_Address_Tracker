import type { Location} from "../types/Location";

interface LocationTableProps {
    locationData: Location | null
    loading: boolean;
}

function LocationTable({ locationData, loading }: LocationTableProps) {
    
    return(
    <div 
    className="absolute z-50 left-0 py-8 right-0 top-50 m-auto w-[70%] flex flex-col lg:flex-row lg:justify-around justify-center justify-items-start text-center bg-white rounded-xl">

        {loading ? (
        <div className="flex w-70 flex-col gap-4 m-auto">
        <h2 className="text-gray-500 text-sm mt-1 font-semibold">IP Address</h2>
        <div className="skeleton bg-gray-200 h-7 w-full"></div>
        <h2 className="text-gray-500 text-sm mt-1 font-semibold">Domain</h2>
        <div className="skeleton bg-gray-200 h-7 w-full"></div>
        <h2 className="text-gray-500 text-sm mt-1 font-semibold">Location</h2>
        <div className="skeleton bg-gray-200 h-7 w-full"></div>
        <h2 className="text-gray-500 text-sm mt-1 font-semibold">Timezone</h2>
        <div className="skeleton bg-gray-200 h-7 w-full"></div>
        <h2 className="text-gray-500 text-sm mt-1 font-semibold">ISP</h2>
        <div className="skeleton bg-gray-200 h-7 w-full"></div>
        </div>
        ) : (
            <div className="flex flex-col gap-4 m-auto">
          <div> 
            <h2 className="text-gray-500 text-sm font-semibold">IP Address</h2>
            <div className="rounded-lg bg-gray-200 mt-5 h-7 w-70 text-lg text-gray-800 font-bold">{locationData?.ip || "192.212.174.101"}</div>
            </div>

            <div> 
            <h2 className="text-gray-500 text-sm font-semibold">Domain</h2>
            <p className="rounded-lg bg-gray-200 mt-5 h-7 w-70 text-lg text-gray-800 font-bold">{locationData?.as.domain || "www.example.com"}</p>
            </div>

            <div>
            <h2 className="text-gray-500 text-sm font-semibold">Location</h2>
            <p className="rounded-lg bg-gray-200 mt-5 h-7 w-70 text-lg text-gray-800 font-bold">{locationData?.location?.city || "Brooklyn"}, {locationData?.location?.region || "NY"} {locationData?.location?.postalCode || "10001"}</p>
            </div>

            <div>
            <h2 className="text-gray-500 text-sm font-semibold">Timezone</h2>
            <p className="rounded-lg bg-gray-200 mt-5 h-7 w-70 text-lg text-gray-800 font-bold">{locationData?.location?.timezone || "UTC -05:00"}</p>
            </div>
            
            <div>
            <h2 className="text-gray-500 text-sm font-semibold">ISP</h2>
            <p className="rounded-lg bg-gray-200 mt-5 h-7 w-70 text-lg text-gray-800 font-bold">{ locationData ?  locationData?.isp || "Not Found" : "SpaceX Starlink"}</p>
            </div>
            </div>
        )}
        </div>
    )
}

export default LocationTable;