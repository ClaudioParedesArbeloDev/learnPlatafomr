import { Router } from "express";

const router = Router()

router.get('/', async(req, res) =>{
    res.render('contacto')
})

export default router