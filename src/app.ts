// Modules

import express, { Application } from 'express';

const app: Application = express();

// Routes

import authRoutes from './routes/auth.routes';
import postRoutes from './routes/post.routes';
import petRoutes from './routes/pet.routes';

// Settings

app.set('PORT', process.env.PORT || 4000);


app.use(express.json());

app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/post', postRoutes);
app.use('/api/v1/pet', petRoutes);

export default app;