const control = {};
const Planes = require("../../database/models/Planes");

control.get = async (req, res) => {
  res.send(await Planes.findAll());
};

control.post = async (req, res) => {
  if (
    req.body.nombre &&
    req.body.descripcion &&
    req.body.montoanual &&
    req.body.montomensual
  ) {
    if (
      await Planes.findOne({
        where: {
          nombre: req.body.nombre,
        },
      })
    ) {
      res.send({ err: "no se puede crear el usuario, el email esta en uso" });
    } else {
      await Planes.create({
        nombre: req.body.nombre,
        descripcion: req.body.descripcion,
        montoanual: req.body.montoanual,
        montomensual: req.body.montomensual,
      });

      res.status(200).send();
    }
  } else {
    res.send("no me dicess nada");
  }
};

control.update = async (req, res) => {
  if (
    req.params.id &&
    (req.body.nombre ||
      req.body.descripcion ||
      req.body.montoanual ||
      req.body.montomensual)
  ) {
    var plan = await Planes.findOne({
      where: {
        id: req.params.id,
      },
    });

    if (plan) {
      var nombre = req.body.nombre || plan.getDataValue("nombre");
      var descripcion =
        req.body.descripcion || plan.getDataValue("descripcion");
      var montoanual = req.body.montoanual || plan.getDataValue("montoanual");
      var montomensual =
        req.body.montomensual || plan.getDataValue("montomensual");

      await Planes.update(
        {
          nombre: nombre,
          descripcion: descripcion,
          montoanual: montoanual,
          montomensual: montomensual
        },
        {
          where: {
            id: req.params.id,
          },
        }
      );

      res.status(200).send();
    } else {
      res.status(201).send();
    }
  } else {
    res.status(201).send();
  }
};

control.delete = async (req, res) => {
  if (req.params.id) {
    if (
      await Planes.findOne({
        where: {
          id: req.params.id,
        },
      })
    ) {
      await Planes.destroy({
        where: {
          id: req.params.id,
        },
      });
      res.status(200).send();
    } else {
      res.status(201).send();
    }
  } else {
    res.status(201).send();
  }
};

module.exports = control;
