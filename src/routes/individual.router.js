import { Router } from "express";
import registroModel from "../models/register.model.js";

const router = Router()

router.get('/delete/:name', async (req, res) =>{
    const name = req.params.nombre
    await registroModel.deleteOne({name})
    res.redirect('/listado')
})

router.get('/:name', async(req, res) =>{
    const name = req.params.nombre
    const alumno = await registroModel.findOne({name})
    res.render('individual', alumno)
})

export default router