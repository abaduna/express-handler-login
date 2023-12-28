import { Router } from "express";
import userModel from "../models/users.model";

const router = Router()

router.post("/register",async (req,res)=>{
    const {first_name,last_name,email,age,password} = req.body
    const existe = await userModel.findOne({email})

    if (existe) {
        return res.status(400).send({status:"error",error:"El usuario ya existe"})
    }

    const user = {
        first_name,
        last_name,
        email,
        age,
        password
    }

    let result  = await userModel.create(user)

    res.send({status:"succes",message:"usuario registrado"})
})

router.post("/login",async (req,res)=>{
    const {email,password} = req.body
    const user = await userModel.findOne({email,password})

    if (!user) {
        return res.status(400).send({status:"error",error:"Eror credenciales"})
    }

   req.session.user = {
    name:`${user.first_name} ${user.last_name}`,
    email: `${user.email}`,
    age:`${user.age}`
   }

    res.send({status:"succes",payload:req.session.user ,message:"primer logeo"})
})

export default  router