import express  from "express";
import session from "express-session"
import cookieParser from "cookie-parser";

import MongoStore from "connect-mongo";
import mongoose from "monguse"
import handlebars from "express-handlebars"

import __dirame from "./utils.js"
import viewsRouter from "./router/views.router.js"
import sessionRouter from "./router/session.router.js"
const app = express()


const connection = mongoose.connect("no olo voy a hacer ni en pedo")


app.use(session({
    store:new fileStorage({
        path:"./session",
        ttl:100,
        retries:0
    }),
    secret:"coderSecreat",
    resave:false,
    saveUninitialized:false
}))
app.engine("handelbars", handlebars.engine())
app.set("views",__dirame+"/views")
app.set("view engine","handelbars")

app.use("/",viewsRouter)
app.use("/api/sessions",sessionRouter)



app.use(express.static(__dirame+`/public`))
app.listen(4000,()=>{
    console.log(`corriendo...`);
})