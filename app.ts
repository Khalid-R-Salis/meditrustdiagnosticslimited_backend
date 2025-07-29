import './config/env.config';
import express, { Express } from 'express';
import cors from 'cors';
import { corsOption } from './config/cors.config'
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';

import startDB from './src/db/start.db';
import errorHandler from './src/middleware/error.middleware';
import { assertEnviromentables } from './src/utils/assertions.utils';
import notFound from './src/middleware/not.found.middleware';
import AppLanguage from './src/constants/app.language';

const app: Express = express();

app.use(express.json());
app.use(helmet());
app.use(cors(corsOption));

const rateLimiter = rateLimit({
  windowMs: 10 * 60 * 1000,
  limit: async () => 100,
  message: AppLanguage.tooManyRequests,
  standardHeaders: true,
});

app.use('/api', rateLimiter);

const connectWithRetry = async () => {
  const uriString = process.env[assertEnviromentables('DATABASE')];
  try {
    await startDB(uriString);
  } catch (error) {
    console.log(AppLanguage.errorConnectingToDatabase, error);
    console.log(AppLanguage.retryingDatabase(5));
    setTimeout(connectWithRetry, 5000);
  }
}
connectWithRetry();

app.use(errorHandler);
app.use(notFound);

export default app;