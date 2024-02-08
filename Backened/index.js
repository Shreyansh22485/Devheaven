import  express  from "express";
import morgan from "morgan";



const app=express();

app.use(express.json());
app.use(morgan('dev'));




app.get("/",(req,res) =>{
    res.send("<h1>Welcomw to practice run</h1>")
})

const PORT = 8080;

app.listen(PORT,()=>
    {console.log(`server on port ${PORT}`)}
);