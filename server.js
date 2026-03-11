const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")

const app = express()

app.use(cors())
app.use(express.json())

mongoose.connect("mongodb://127.0.0.1:27017/doctor")

const BookingSchema = new mongoose.Schema({
name:String,
doctor:String,
date:String,
time:String
})

const Booking = mongoose.model("Booking",BookingSchema)

app.post("/booking",async(req,res)=>{
const booking = new Booking(req.body)
await booking.save()
res.send("success")
})

app.get("/booking",async(req,res)=>{
const data = await Booking.find()
res.json(data)
})

app.listen(5000,()=>{
console.log("Server running on port 5000")
})