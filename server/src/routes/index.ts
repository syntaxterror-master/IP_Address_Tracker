import { Router } from "express";
import * as geoLocationController from "../controllers/geoLocationController";


const router = Router()


router.use("/geolocation", geoLocationController.getLocation)

export { router }