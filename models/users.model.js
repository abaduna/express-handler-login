//ver donde va esto
import mongoose from "mongose"

const collection ="Users"

const schema = new mongoose.Schema({
    first_name:String,
    last_name:String,
    email:String,
    age:Number,
    password:String

})


const userModel = mongoose.model(collection,schema)


export default userModel