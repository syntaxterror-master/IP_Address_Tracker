import type { Request, Response, NextFunction } from "express"
import dotenv from "dotenv"

dotenv.config()

const normalizeURL = (input: string): string => {
    try {
        const url = new URL(
            input.startsWith("http://") || input.startsWith("https://") ? input : `http://${input}`
        )
        return url.hostname.toLowerCase()
    } catch (error) {
        return input.toLowerCase()
    }
}

export const getLocation = [
    async (req: Request, res: Response, next: NextFunction) => {

        const { address } = req.body;

        const detectType = (address : any) => {
        const value = normalizeURL(address);
        
        // IPv4
        const ipRegex = /^(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}$/;

        // email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        // Domain (without http/https)
        const domainRegex = /^([a-z0-9-]+\.)+[a-z]{2,}$/;
            

            if (ipRegex.test(value)) {
                return { type: "ipAddress", value}
            } else if (emailRegex.test(value)) {
                return { type: "email", value }
            } else if (domainRegex.test(value)) {
                return { type: "domain", value }
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
