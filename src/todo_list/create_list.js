import { request, response } from "express";
import db from "../conn.js";

const create_list = async (req = request, res = response) => {
     try {

        const { nama_barang, harga_barang } = req.body

        const result = await db.list.create({
            data : {
                nama_barang,
                harga_barang
            }
        })
        res.status(200).json({
            message : "create list barang berhasil",
            result
        })
     } catch (error) {
        console.error(error)
        res.status(400).json(error)
     }
}

export default create_list