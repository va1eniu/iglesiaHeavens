import Creyente from "../models/Creyente.js";

const getCreyente = async (req, res)=>{
   const creyentes = await Creyente.find();
   res.json(creyentes);
}

const postCreyente = async(req, res)=>{
    const {nombre, edad, departamento, municipio, comuna, barrio, ministerio, nivelFormacion, nivelRuta} = req.body;
    const nuevoCreyente = new Creyente ({nombre, edad, departamento, municipio, comuna, barrio, ministerio, nivelFormacion, nivelRuta});

    const existeNombre = await Creyente.findOne({nombre})
    if (existeNombre) {
        return res.status(400).json({
            msg :"el nombre ya esta registrado"
        })
    }
    await nuevoCreyente.save();
    res.json({
        "message":"nuevo creyente",
         nuevoCreyente
    })
}

export {
    getCreyente,
    postCreyente
};