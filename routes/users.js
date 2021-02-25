const { Router } = require('express');
const { usuariosGET, usuariosPUT, usuariosPOST, usuariosDELETE, usuariosPATCH } = require('../controllers/users');
const { check } = require('express-validator');

const { validarCampos } = require('../middlewares/validar-campos');
const { esRoleValido, emailExiste, existeUsuarioPorID } = require('../helpers/db-validators');

const router = Router();

  router.get('/', usuariosGET);


  router.post('/', [
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('password', 'El password debe tener más de 6 letras').isLength({min:6}),
    check('correo', 'El correo no es válido').isEmail(),
    check('correo').custom(emailExiste),
    // check('rol', 'No es un rol válido').isIn(['ADMIN_ROLE','USER_ROLE']),
    check('rol').custom( esRoleValido ),
    validarCampos
  ], usuariosPOST);

  router.put('/:id', [
    check('id', 'No es un ID válido').isMongoId(),
    check('id').custom(existeUsuarioPorID),
    check('rol').custom( esRoleValido ),
    validarCampos
  ], usuariosPUT);

  router.delete('/:id', [
    check('id', 'No es un ID válido').isMongoId(),
    check('id').custom(existeUsuarioPorID),
    validarCampos
  ], usuariosDELETE);

  router.patch('/', usuariosPATCH);





module.exports = router;