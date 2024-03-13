const express = require('express'); 

const identificationTypeRoute = require('./routes/identificationType.routes');
const userRoute = require('./routes/user.routes');
const authRoute = require('./routes/auth.routes');
const { verifyToken } = require('../middleware/auth.middleware');
const { routeNotFound } = require('../middleware/route.middleware');

const routerApi= (app)=>{
  const router = express.Router();
  app.use('/api/v1', router);

  router.use('/identificationType', verifyToken, identificationTypeRoute);
  router.use('/user', verifyToken, userRoute);
  router.use('/auth', authRoute);

  app.use(routeNotFound);
}

module.exports = routerApi;