const express = require("express")
const mongoose = require("mongoose")
require("dotenv").config({path: './Config/.env'})
const app = express()

mongoose.connect(process.env.MONGO_URI, 
	{
	 useNewUrlParser: true,
	 useUnifiedTopology: true,
	})
.then(()=>{
	console.log('DATA BASE CONNECTED');
	})
.catch((error)=>{
	console.log( error);
	})

app.use(express.json())
app.use(require("./routes/auth"));
app.use(require("./routes/GamesList"));
app.use(require("./routes/Userlist"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`SERVER STARTED ON PORT ${PORT}`))