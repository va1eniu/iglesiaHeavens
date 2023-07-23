import Creyente from "../models/Creyente.js";

const getCreyente = async (req, res)=>{
    res.status(403).json({
        message: "creyente :)"
    })
}

export {
    getCreyente
};