import {Schema, model} from "mongoose";

const creyenteSchema = Schema({
    nombre :{
        type: String,
        required:[true,'El campo de nombres es requerido'],
        trim: true //elimina los espacios en blanco al inicio y final del string
    },
    edad :{
        type :String,
        required : true,
        trim: true
    },
    departamento:{
        type :String,
        enum: ["santander"],
        trim: true
    },
    municipio:{
        type :String,
        enum: ["Bucaramanga", "piedecuesta", "FloridaBlanca" , "Giron"],
        trim: true
    },
    Comuna:{
        type :String,
        required : true,
        trim: true
    },
    Barrio:{
        type :String,
        required : true,
        trim: true
    },
    ministerio :{
        type :String,
        enum: ["Adoracion", "Mujeres", "jovenes", "Hombres"],
        trim: true
    },
    nivelFormacion :{
        type :String,
        enum : ["Liderazgo", "Anciano"],
        trim: true
    },

    nivelRuta :{
        type :String,
        enum : ["consolidado", "enviado"],
        trim: true
    }
})

const Creyente = model("creyente", creyenteSchema);

export default Creyente;