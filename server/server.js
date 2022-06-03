const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const path = require("path");
const ProjectStore =require("./models/ProjectModel");
const TeknologyStore =require("./models/TeknologyModel");
const { MongoClient, ServerApiVersion } = require('mongodb');

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.listen(process.env.PORT, () => {
  console.log("Server is up on port : ", process.env.PORT);
});


app.get("/", (req, res) => {
  res.send("Hello Worldsss!");
});


mongoose.connect("mongodb+srv://melike_ozlen:1234@cluster0.qrwlmkh.mongodb.net/?retryWrites=true&w=majority",{
  useNewUrlParser: true, 
  useUnifiedTopology: true
})
.then(console.log("Connect"))
.catch((err) => console.log(err));




app.post('/projects', async (req, res) => { //DATBASE VERİ GÖNDERDİK
    try {
        const projects = new ProjectStore({
            title: req.body.title,
            description: req.body.description,
            img_url:  req.body.img_url,
            project_url:  req.body.project_url,
            tag:  req.body.tag
        })
        const myproject = await projects.save();  //database'e kaydoldu
        res.status(200).json(myproject); //200 başarılı işlemi temsil eder.
    } catch (error) {
        console.log(error);e
    }
})

app.get('/getproject', (req, res) => {       //DATBASE'DEN VERİLERİ ALACAĞIMIZ YER
  ProjectStore.find().then(project => res.json(project));
})



app.post('/teknology', async (req, res) => { //DATBASE VERİ GÖNDERDİK
  try {
      const teknology = new TeknologyStore({
        whatAmIUsing: req.body.whatAmIUsing,
        whatAmILearning: req.body.whatAmILearning
      })
      const myteknology = await teknology.save();  //database'e kaydoldu
      res.status(200).json(myteknology); //200 başarılı işlemi temsil eder.
  } catch (error) {
      console.log(error);
  }
})
app.get('/getteknology', (req, res) => {       //DATBASE'DEN VERİLERİ ALACAĞIMIZ YER
  TeknologyStore.find().then(teknology => res.json(teknology));
})



const router = new express.Router();
router.get("/getproject" , async(req, res)=>{
  try{
    const activities = await projects.find().sort({updatedAt: -1});
    res.status(200).send(activities);
  } catch(err){
    res.status(500).send({err:err.message});
  }
});