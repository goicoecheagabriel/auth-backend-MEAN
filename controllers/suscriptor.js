const { response } = require('express');
const Suscriptor = require('../models/Suscriptor');


// nos devuelve todos los suscriptores
const getAll = async ( req,res = response ) => {
    try {

        const suscriptors = await Suscriptor.find();

        if ( !suscriptors ) {
            return res.status(404).json({
                ok: false,
                msg: `No existen suscriptores registrados.`
            });
        }

        return res.status(201)
            .json({
                ok: true,
                data: suscriptors
            })
        
    } catch (error) {
        console.error("ERROR:::/Controller/suscriptor.js:::getSuscriptors()",error);

        return res.status(500).json({
            ok: false,
            msg: 'por favor hable con el administrador. Error de servidor backend.'
        })
    }
}

// creamos un suscriptor
const crearSuscriptor = async ( req, res = response ) => {
    const { name, email, origen, validado, aceptaPublicidad } = req.body;
    console.log(":::CREAR:SUSCRIPTOR:::", {...req.body});
    // return;

    try {
        // Verificar que el email no existe en la base de datos
        let suscriptor = await Suscriptor.findOne({ email });

        if ( suscriptor ) {
            return res.status(400).json({
                ok: false,
                msg: `El email: ${ email } ya se encuentra dado de alta en nuestra lista.`
            });
        }

        // Crear suscriptor con el modelo
        const dbSuscriptor = new Suscriptor( req.body );

        // Crear nuevo suscriptor en la DB
        await dbSuscriptor.save();

        // generar respuesta exitosa
        return res.status(201).json({
            ok: true,
            email,
            name,
            origen,
            validado,
            aceptaPublicidad
        });

    } catch (error) {
        console.error("ERROR:::/Controller/suscriptor.js:::crearSuscriptor()",error);

        return res.status(500).json({
            ok: false,
            msg: 'por favor hable con el administrador. Error de servidor backend.'
        })
    }
}

module.exports = {
    crearSuscriptor,
    getAll
}