import { Router } from "express";
import create_list from "./create_list.js";

const route = Router()
route.post('/api/create', create_list)

export default route