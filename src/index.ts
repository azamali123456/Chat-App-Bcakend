import * as express from 'express';
import * as bodyParser from "body-parser"
const cors = require('cors');

const app = express();

// Use CORS middleware
app.use(cors());
import './database/db'
import { userRoute } from './routes/user.route';
import { checkoutRoute } from './routes/checkout.route';
import { db } from './database/db';
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use('/api/auth', userRoute)
app.use('/api/checkout', checkoutRoute)

// Database Connection
db().then(() => {
     console.log('Database connected');
     const PORT = 4000;
     app.listen(PORT, () => {
          console.log(`Server is running on port ${PORT}`);
     });
})
     .catch((error: any) => {
          console.error('Error connecting to database:', error);
     });