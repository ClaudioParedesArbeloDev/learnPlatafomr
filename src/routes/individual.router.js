import { Router } from "express";
import registroModel from "../models/register.model.js";

const router = Router()

router.get('/delete/:dni', async (req, res) =>{
    const dni = req.params.dni
    await registroModel.deleteOne({dni})
    res.redirect('/listado')
})

router.get('/:dni', async(req, res) =>{
    const dni = req.params.dni
    const alumno = await registroModel.findOne({dni})
    console.log(alumno)
    if (!alumno.avatar){
        alumno.avatar = 'img/avatar.png';
    }
    res.render('individual', alumno)
})

export default router