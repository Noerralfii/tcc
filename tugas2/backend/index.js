import express, {Router} from "express"
import cors from "cors"
import Route from "./route/Route.js"

const app = express()
app.use(cors())
app.use(express.json())
app.use(Route)

app.listen(8080, '0,0,0,0',  ()=> {
    console.log("server running on port 8080");
});
