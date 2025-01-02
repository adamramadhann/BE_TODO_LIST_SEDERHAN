import { request, response } from "express"
import db from "../conn.js"

const delete_list = async (req = request, res = response) => {
    const { id } = req.params  
    const idInt = parseInt(id) 
    try {
        const result = await db.list.delete({
            where : {
                id : idInt
            }
        })
        res.status(200).json({
            message : "sycces",
            result
        })
    } catch (error) {
        console.error(error)
        res.status(500).json({
            messgae : "error",
            error
        })
    }
}
export default delete_list