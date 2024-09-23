const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger-output.json'); // Swagger documentation
const dbConnect = require('./server/models/dbConnect'); // Database connection

dotenv.config(); // Load environment variables from .env

const app = express();
const port = process.env.PORT || 8000;

// Static Files
app.use(express.static('public'));

// Middleware
app.use(express.json());
app.use(cors());
// Allow access from all origins
app.use(cors({ origin: '*' }));
app.use(express.urlencoded({ extended: true }));

// Suhail Edit: Component Management API
let components = [
  'NavHeroBar', 'ShowEstimates', 'OurServices', 'AboutFlight', 'LearnMore', 
  'OurFleets', 'PushSearchRes', 'Testimonials', 'ContactPage'
];

// API to get components
app.get('/api/components', (req, res) => {
  res.json(components);
});

// API to update components
app.post('/api/components', (req, res) => {
  components = req.body;
  res.json({ message: 'Components updated successfully' });
});
// Suhail Edit ends

// Admin Routes
const adminRoutes = require('./server/adminRoutes/adminRoutes');
app.use('/api/admin', adminRoutes);

// Swagger Documentation
app.use('/api/admin/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Database Connection
dbConnect();

// Global Error Handling Middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

// Start the Server
app.listen(port, () => {
  console.log(`Server is running at port ${port}`);
});
