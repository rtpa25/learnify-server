import mongoose from 'mongoose';
import logger from './logger';

export const connect = async () => {
  const dbUri = process.env.DB_URI || '';
  try {
    if (dbUri.length === 0) {
      await mongoose.connect('mongodb://127.0.0.1:27017', {
        user: 'root',
        pass: 'root',
        dbName: 'learnify',
      });
    } else {
      logger.info(`trying to connect to database: ${dbUri}`);
      await mongoose.connect(dbUri);
    }
    logger.info('connected to DB 😎');
  } catch (e) {
    logger.error('error while connecting to DB', e);
    process.exit(1);
  }
};
