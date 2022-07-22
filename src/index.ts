import 'dotenv/config';
import express from 'express';
import { connect } from './utils/connect';
import logger from './utils/logger';
import helmet from 'helmet';
import { getAllCORSHeaders } from 'supertokens-node';
import { middleware } from 'supertokens-node/framework/express';
import cors from 'cors';
import { errorHandler } from 'supertokens-node/framework/express';
import { initSuperTokens } from './utils/initSuperTokens';

initSuperTokens();

const app = express();
const port = process.env.PORT || 8080;

app.set('trust proxy', 1);
app.use(express.json());
app.use(
  helmet({
    contentSecurityPolicy: false,
  })
);

app.use(
  cors({
    origin: [
      'http://localhost:3000',
      'https://auth-demo-frontend-six.vercel.app',
    ],
    allowedHeaders: ['content-type', ...getAllCORSHeaders()],
    credentials: true,
  })
);

app.use(middleware());

app.get('/', (_, res) => {
  res.send('Hello from learnify');
});

// Add this AFTER all your routes
app.use(errorHandler());

app.listen(port, async () => {
  await connect();
  logger.info(`Example app listening at http://localhost:${port}`);
});
