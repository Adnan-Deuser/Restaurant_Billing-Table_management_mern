require("dotenv").config();
const express = require("express");
const connectDB = require("./config/database")
const globalErrorHandler = require("./middleware/globalErrorHandler")
const config = require("./config/config");
const createHttpError = require("http-errors");
const cookieParser = require("cookie-parser");
const app = express();

const PORT = config.port;
connectDB();

//Middlefi
app.use(express.json());  //it parses incoming requests in json format
app.use(cookieParser());

app.get("/", (req,res) =>{
    res.json({message : "Hello From the other Side😤"})
})

app.use("/api/user", require("./routes/userRoute"));
app.use("/api/order", require("./routes/orderRoute"));
//Global Error
app.use(globalErrorHandler);

app.listen(PORT, () =>{
    console.log(`POS Server is listening on PORT ${PORT}`)
})