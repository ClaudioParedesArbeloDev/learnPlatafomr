import { Router } from "express";
import registroModel from "../models/register.model.js";
import multer from "multer";
import path from "path"

const router = Router()

//Configuracion de Multer
const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, './src/documentacion/')
    },
    filename: function(req, file, cb) {
        const dni = req.body.dni; 
        const filename = dni + path.extname(file.originalname);
        cb(null, filename);
    }
        
})

const uploader = multer({
    storage: storage,
    limits: {
        fileSize: 2 * 1024 * 1024
    }
})

router.get('/', async(req, res) =>{
    res.render('registro', {})
})



router.post('/registro', uploader.single('file'), async (req, res) =>{
    const { nombre, apellido, dni, domicilio, celular, fechaNacimiento, email, password } = req.body;
    const fotocopia = req.file ? req.file.path : null; // Guarda el nombre de la imagen si se subió, de lo contrario, guarda null
    
    try {
        const registro = new registroModel({
            nombre,
            apellido,
            dni,
            domicilio,
            celular,
            fechaNacimiento,
            email,
            password,
            fotocopia
        });
        await registro.save();
        res.redirect('/registrocompletado/');
    } catch (error) {
        res.status(500).send({ status: 'error', error: error.message });
    }
});


export default router