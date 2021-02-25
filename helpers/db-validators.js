const role = require('../models/role');
const Usuario = require('../models/user');

const esRoleValido = async (rol = '') => {
    const existeRol = await role.findOne({ rol });
    if(!existeRol){
      throw new Error(`El rol ${rol} no está registrado en la BD`)
    }
  }

const emailExiste = async (correo) => {
    const existeEmail = await Usuario.findOne({ correo });
    if (existeEmail) {
        throw new Error(`El email ${correo} ya está registrado en la BD`)
    }
}

const existeUsuarioPorID = async (id) => {
  const existeUsuario = await Usuario.findById( id );
  if (!existeUsuario) {
      throw new Error(`El id ${id} no existe`)
  }
}

module.exports = {
    esRoleValido,
    emailExiste,
    existeUsuarioPorID
}