const control = {};
const Usuarios = require('../../database/models/Usuarios');

control.get = async(req, res)=>{
    res.send(await Usuarios.findAll());
};

control.post = async(req, res)=>{
    if (req.body.nombre != undefined && req.body.email != undefined && req.body.contrasenia != undefined) {
        if(await Usuarios.findOne({
            where:{
                email: req.body.email
            }
        })){
            res.send({err: "no se puede crear el usuario, el email esta en uso"});
        }else{
            await Usuarios.create({
                nombre: req.body.nombre, 
                email: req.body.email,
                contrasenia: req.body.contrasenia
            });

            res.status(200).send();
        };

    }else{
        res.send("no me dicess nada")
    }
}

control.update = async(req, res)=>{
    if(req.params.id != undefined && req.body.nombre || req.body.email || req.body.contrasenia){
        var usuario = await Usuarios.findOne({
            where:{
                id: req.params.id
            }
        });

        if(usuario){
            var nombre = req.body.nombre || usuario.getDataValue('nombre');
            var email = req.body.email || usuario.getDataValue('email');
            var contrasenia = req.body.contrasenia || usuario.getDataValue('contrasenia');

            await Usuarios.update({
                nombre: nombre,
                email: email,
                contrasenia: contrasenia
            },{
                where:{
                    id: req.params.id
                }
            });

            res.status(200).send();
        }else{
            res.status(201).send();
        }
    }else{
        res.status(201).send();
    }
}

control.delete = async(req, res)=>{
    if(req.params.id){
        if(await Usuarios.findOne({
            where: {
                id: req.params.id
            }
        })){
            await Usuarios.destroy({
                where:{
                    id: req.params.id
                }
            });
            res.status(200).send();
        }else{
            res.status(201).send();
        }
    }else{
        res.status(201).send();
    }
}

module.exports = control;