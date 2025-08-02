var mongoose=require('mongoose');
var cors=require('cors')
var dotenv=require('dotenv');
dotenv.config();
var express=require('express');
var router=require('./routes/FormRouter');
var app=express();

app.use(express.json());
app.use(cors({origin:'*'}))

mongoose.connect(process.env.MONGO_URL)
.then(()=>console.log('DataBase Connected!'))
.catch((err)=>console.log('DB Connection Failed!'))


app.use('/user',router);

app.use('/',(req,res)=>{
    res.status(200).json('Server is Up!');
})

const PORT=process.env.PORT||5000;
app.listen(PORT,()=>console.log('Server Connected!'))