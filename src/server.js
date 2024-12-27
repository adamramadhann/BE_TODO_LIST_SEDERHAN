import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import route from "./todo_list/route.js"

dotenv.config()

const app = express()
app.use(cors())
app.use(express.json())
app.use(express.json({
    limit : "100mb"
}))
app.use(express.urlencoded({extended : true }))

// masukan file route nya agar bisa di akses
app.use(route)

const PORT = process.env.PORT
app.listen(PORT, () => {
    console.info(`
        ======================
        SERVER RUN PORT ${PORT}
        ======================
        `)
})
