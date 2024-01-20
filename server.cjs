const express = require("express");
const mongoose = require("mongoose");
const app = express();

app.use(express.json());

//connect db
mongoose.connect("mongodb://127.0.0.1/db")
.then(() => console.log("DB connected"))
.catch((error) => console.log(error));

const PORT = process.env.PORT || 3000;

const InvestSchema = new mongoose.Schema({
  riskStore: { type: Array },
  nigerianStore: { type: Array },
  forgeinStore: { type: Array },
  techStore: { type: Array },
  emergingStore: { type: Array },
  nigerianBonds: { type: Array },
  forgeinBonds: { type: Array },
  comodities: { type: Array },
  realEstate: { type: Array },
  tbills: { type: Array },
  alternative: { type: Array },
})

const Invest = mongoose.model("Invest", InvestSchema);

app.get("/",async (req,res,next) => {
  try{
    const invests = await Invest.find();
    return res.status(200).send({ invests });
  } catch(error) {
    next(error);
  }
});

app.listen(PORT,() => console.log("server running on port", PORT));