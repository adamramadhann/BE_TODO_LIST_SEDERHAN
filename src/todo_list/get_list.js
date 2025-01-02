import { request, response } from "express"
import db from "../conn.js"

const get_list = async (req = request, res = response) => {
    try {
        const result = await db.list.findMany()
        res.status(200).json({
            messgae :"succes",
            result
        })
    } catch (error) {
        console.error(error)
        res.status(500).json({
            message : "error",
            error
        })
    }
}

export default get_list