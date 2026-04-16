import type { Request, Response, NextFunction } from "express"
import dotenv from "dotenv"

dotenv.config()

export const getLocation = [
    async (req: Request, res: Response, next: NextFunction) => {

        const { address } = req.body;
        console.log("req.body ",address);
        

        const detectType = (address : any) => {
        // IPv4
        const ipRegex = /^(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}$/;

        // email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        // Domain (without http/https)
        const domainRegex = /^(?!:\/\/)([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}$/;

            console.log("adress: ", address);
            

            if (ipRegex.test(address)) {
                return "ipAddress"
            } else if (emailRegex.test(address)) {
                return "email"
            } else if (domainRegex.test(address)) {
                return "domain"
            } else {
                throw new Error("Invalid input type")
            }
        }

        const type = detectType(address);        

        try {
        const response = await fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=${process.env.GEO_API_KEY}&${type}=${address}`);
        const data = await response.json();
        if(data){
            return res.status(200).json(data)
        }
        } catch (error) {
        console.error("Error fetching geolocation data:", error);
        res.status(500).json({ error: "Failed to fetch geolocation data" })
        }
    }
]
