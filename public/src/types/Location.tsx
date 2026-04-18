export interface Location {
    ip: string;
    location: {
        city: string;
        region: string;
        country: string;
        lat: number;
        lng: number;
        postalCode: string;
        timezone: string;
    };
    domains: string[];
    isp: string;
    as: {
        asn: number;
        name: string;
        route: string;
        domain: string;
        type: string;
    }
}