import mongoose from 'mongoose'
import cors from 'cors'
import express from 'express'
import dotenv from 'dotenv'
import { test } from './backend/controllers/studentController.js'

dotenv.config()

mongoose.connect(process.env.url)
    .then(() => {
        console.log('jala todo chido')
    })
    .catch((err) => {
        console.log('no jala', err)
    })

const app = express()
app.use(cors())

app.listen(5000, () => {
    console.log("todo fine")
})

test()