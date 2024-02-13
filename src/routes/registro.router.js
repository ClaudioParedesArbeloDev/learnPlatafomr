import { Router } from "express";
import registroModel from "../models/register.model.js";
import multer from "multer";



const router = Router()

//Configuracion de Multer
const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, './src/documentacion/')
    },
    filename: function(req, file, cb) {
        const dni = req.body.dni; 
        const fileType = file.fieldname;
        const filename = `${dni}_${fileType}.jpg`;
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



router.post('/registro', uploader.fields([{name:'frente', maxCount:1}, {name:'dorso', maxCount:1}]), async (req, res) =>{
    const { nombre, apellido, dni, domicilio, celular, fechaNacimiento, email, password, repitaPassword } = req.body;
    const frente = req.files['frente'] ? req.files['frente'][0].filename : null; // Guarda el nombre de la imagen si se subió, de lo contrario, guarda null
    const dorso = req.files['dorso'] ? req.files['dorso'][0].filename: null;

    if(!/^\d{8}$/.test(dni)){
        return res.status(400).send({status: 'error', message: 'El numero de documento (DNI) debe contener excatamente 8 digitos.'});
    }
    if(password!==repitaPassword) {
        return res.status(400).send({status: 'error', message: 'Las contraseñas no coinciden'});
    }
    try {

        const existeRegistro = await registroModel.findOne({dni: dni});
        if (existeRegistro){
            return res.status(400).send({status: 'error', message: 'El usuario con ese numero de DNI ya esta registrado'});
        }
        const registro = new registroModel({
            nombre,
            apellido,
            dni,
            domicilio,
            celular,
            fechaNacimiento,
            email,
            password,
            frente,
            dorso,
        });
        await registro.save();
        res.redirect('/registrocompletado/');
    } catch (error) {
        res.status(500).send({ status: 'error', error: error.message });
    }
});


export default router