import { request, response } from "express"
import db from "../conn.js"

const edit_list = async (req = request, res = response) => {
    const { id } = req.params
    const { nama_barang, harga_barang} = req.body
    const idInt = parseInt(id)

    try {
        const result = await db.list.update({
            where : {
                id : idInt
            },
            data : {
                nama_barang, 
                harga_barang
            }
        })
        res.status(200).json({
            message : "succes",
            result
        })
    } catch (error) {   
        console.error(error)
        res.status(500).json(error)
    }
}

export default edit_list