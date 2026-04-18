import Header from "./components/Header"
import LocationTable from "./components/LocationTable"
import Map from "./components/Map"
import type { Location } from "./types/Location";
import { useState } from "react";

function App() {
    const [ locationData, setLocationData ] = useState<Location | null>(null);
    const [ loading, setLoading ] = useState(false);
    
    const getLocation = async ( address: string ) => {
      setLoading(true);
      setLocationData(null);
        try {
            const response = await fetch("/api/geolocation", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ address })
            });
            if(response.ok){
                const data = await response.json();
                setLoading(false);
                setLocationData(data)
            }
        } catch (error) {
            console.error("Error fetching geolocation data:", error);
            setLoading(false);
        }
    }
  
    console.log(locationData);
    
  return (
    <>
  <Header onClick={getLocation} setLoading={setLoading} />
  <LocationTable locationData={locationData} loading={loading} />
  <Map locationData={locationData} />
    </>
  )
}

export default App
