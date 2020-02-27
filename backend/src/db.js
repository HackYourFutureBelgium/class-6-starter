import { MongoClient } from 'mongodb';

export default (callback) => {
  // connect to DB local
  MongoClient.connect('mongodb://localhost:27017', (error, client) => {
    if (error) throw error;
    callback(client.db('local'));
  });
}
