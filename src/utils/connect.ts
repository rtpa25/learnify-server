import mongoose from 'mongoose';
import logger from './logger';

export const connect = async () => {
  // const dbUri = process.env.DB_URI || '';
  const dbUri =
    'mongodb+srv://ronit:ronit0123@portfolio-projects.nxiqubj.mongodb.net/learnify?retryWrites=true&w=majority --tls --tlsAllowInvalidCertificates';
  logger.info(`trying to connect to ${dbUri}`);
  try {
    await mongoose.connect(dbUri);
    logger.info('connected to DB 😎');
  } catch (e) {
    logger.error('error while connecting to DB', e);
    process.exit(1);
  }
};
