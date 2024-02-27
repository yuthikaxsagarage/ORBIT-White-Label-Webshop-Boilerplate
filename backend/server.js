import dotenv from 'dotenv';
import Product from './models/productModel.js';
import express from 'express';
import connectDB from './config/db.js';
import colors from 'colors';
import productRoutes from './routes/productRoutes.js';
import { errorHandler, notFound } from './middleware/errorMiddleware.js';

dotenv.config();

connectDB();

const app = express();

app.get('/', (req, res) => {
  res.send('Api');
});

app.use('/api/products', productRoutes);

app.use(notFound);

app.use(errorHandler);

const port = process.env.PORT || 5002;

app.listen(port, console.log('server running'));
