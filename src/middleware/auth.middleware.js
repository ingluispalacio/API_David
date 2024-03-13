const jwt = require('jsonwebtoken');
const  { config } = require('../config/auth');

const verifyToken=(req, res, next) =>{

  if (!req.header('Authorization')) {
    return res.status(401).json({ mensaje: 'Acceso denegado. Token no proporcionado.' });
  }
  const token = req.header('Authorization').split(' ')[1];
  try {
    const decoded = jwt.verify(token, config.secret); 
    req.user = decoded.user[0];
    next();
  } catch (error) {
    return res.status(401).json({ mensaje: 'Token no válido.' });
  }
}

const verifyPermission = async (req, res, next)=> {
  try {
    const userTypeId = req.user ? req.user.userTypeId : null;
    if (!userTypeId) {
      return res.status(401).json({ mensaje: 'Acceso denegado. user con roll no identificado.' });
    }
    //const response = await serviceSeguridad.seguridadTipouser(userTypeId);
    
    let metodos=response[0].metodo.split(',');
    if (!metodos.includes(req.method)) {
      return res.status(403).json({ mensaje: 'Acceso denegado. user no tiene los permisos.' });
    }
    next();
  } catch (error) {
      res.status(500).send({ success: false, message: error.message });
  }
  
}

module.exports={
  verifyToken, verifyPermission
};