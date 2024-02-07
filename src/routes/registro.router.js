import { Router } from "express";
import registroModel from "../models/register.model.js";

const router = Router()

router.get('/', async(req, res) =>{
    res.render('registro', {})
})

router.post('/registro', async(req, res) =>{
     const newRegistro = req.body
     const registroGenerated = new registroModel(newRegistro)
     await registroGenerated.save()
     res.redirect('/individual/' + registroGenerated.nombre)
})

export default router