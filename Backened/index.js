import  express  from "express";
import morgan from "morgan";
import authRouter from "./routes/auth.route.js";
import cors from "cors";



const app=express();
app.use(cors())

app.use(express.json());
app.use(morgan('dev'));



app.use("/api/auth", authRouter);



app.get("/",(req,res) =>{
    res.send("<h1>Welcomw to practice run</h1>")
})

const PORT = 8080;

app.listen(PORT,()=>
{
    console.log(`Server is running on port ${PORT}`);
}
);