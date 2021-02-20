const { response } = require('express');

const usuariosGET = (req = request, res = response) => {

    const {q, nombre = "no name", apikey} = req.query;
    
    res.json({
        msg: 'get API - controlador',
        q,
        nombre,
        apikey
    })
  }

const usuariosPUT = (req, res = response) => {

    const {id} = req.params;

    res.json({
        msg: 'put API - controlador',
        id
    })
  }

const usuariosPOST = (req, res = response) => {

    const {nombre, edad} = req.body;

    res.json({
        msg: 'post API - controlador',
        nombre, 
        edad
    })
  }

const usuariosDELETE = (req, res = response) => {
    res.json({
        msg: 'delete API - controlador'
    })
  }

const usuariosPATCH = (req, res = response) => {
    res.json({
        msg: 'patch API - controlador'
    })
  }

module.exports = {
    usuariosGET,
    usuariosPUT,
    usuariosPOST,
    usuariosDELETE,
    usuariosPATCH
}