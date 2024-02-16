import mongoose from "mongoose";


const registroCollection = 'alumnos'

const registroSchemma = new mongoose.Schema({
    nombre: String,
    apellido: String,
    dni: Number,
    domicilio: String,
    celular: Number,
    fechaNacimiento: String,
    email: String,
    password: String,
    frente: String,
    dorso: String,
    avatar: String,
    nickname: String,
    courses: {
        type:[
            {
                course:{
                    type: mongoose.Schema.Types.ObjectId,
                    ref: "courses"
                }
            }
        ],
        default:[]
    }
})

const registroModel = mongoose.model(registroCollection, registroSchemma)

export default registroModel 