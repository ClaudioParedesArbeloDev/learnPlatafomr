import { Router } from "express";

const router = Router()

router.get('/:name', async(req, res) =>{
    const name = req.params.nombre
    res.render('individual', {name})
})

export default router