import { Router } from "express";
import create_list from "./create_list.js";
import get_list from "./get_list.js";
import delete_list from "./delete_list.js";
import edit_list from "./edit_list.js";

const route = Router()
route.post('/api/create', create_list)
route.get('/api/get_list', get_list)
route.delete(`/api/delete_list/:id`, delete_list)
route.put('/api/edit_list/:id', edit_list)



export default route