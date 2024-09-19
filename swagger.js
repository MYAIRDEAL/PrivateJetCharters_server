const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'BookAnyJet Documentation',
    description: 'This is the BookAnyJet documentation which says the working of all the api'
  },
  host: 'localhost:8000'
};

const outputFile = './swagger-output.json';
const routes = ['./server/adminRoutes/adminRoutes'];

/* NOTE: If you are using the express Router, you must pass in the 'routes' only the 
root file where the route starts, such as index.js, app.js, routes.js, etc ... */

swaggerAutogen(outputFile, routes, doc);