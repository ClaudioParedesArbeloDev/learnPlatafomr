import { Router } from "express";

import registroModel from "../models/register.model.js";

const router = Router()

router.get('/', async(req, res) =>{
    const listado = await registroModel.find().lean().exec()
    res.render('listado', {listado} )
})

export default router 