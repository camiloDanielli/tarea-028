const { Router, request } = require('express');
const router = Router();
const _ = require('underscore');

const data = require('../contactos.json');

//contactos
router.get('/', (req, res) => {
    res.json(data);
});

router.post('/', (req, res) => {
    const { nombre, apellido, tel, direccion } = req.body;
    if (nombre && apellido && tel && direccion) {
        const id = data.length + 1;
        const newcontacto = {id, ...req.body};
        data.push(newcontacto);
        res.json(data);
    }
    else {
        res.status(500).json({ "error": "There was an error." });
    }
});

router.put('/:id', (req, res) => {
    const { id } = req.params;
    const { nombre, apellido, tel, direccion } = req.body;
    if (nombre && apellido && tel && direccion) {
        _.each(data, (contacto, i) => {
            if (contacto.id == id) {
                contacto.nombre = nombre;
                contacto.apellido = apellido;
                contacto.tel = tel;
                contacto.direccion = direccion;
            }
        });
        res.json(data);
    }
    else {
        res.status(500).json({ "error": "There was an error." });
    }
});

router.delete('/:id', (req, res) => {
    const { id } = req.params;
    _.each(data, (contacto, i) => {
        if (contacto.id == id) {
            data.splice(i, 1);
        }
    });
    res.send(data);
})

module.exports = router;