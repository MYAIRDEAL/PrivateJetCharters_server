const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'BookAnyJet Documentation',
    description: 'This is the BookAnyJet documentation which says the working of all the api'
  },
  host: 'localhost:8000',
  scheme:['http']
};

const outputFile = './swagger-output.json';
const routes = ['./server/adminRoutes/adminRoutes'];


swaggerAutogen(outputFile, routes, doc);

