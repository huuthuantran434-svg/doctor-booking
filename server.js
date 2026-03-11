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

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});