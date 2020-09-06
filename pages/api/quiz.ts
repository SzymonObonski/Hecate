import * as url from 'url';
import { MongoClient } from 'mongodb';

let cachedDb = null;

async function connectToDatabase(uri) {
  if (cachedDb) {
    return cachedDb;
  }
  const client = await MongoClient.connect(uri, { useNewUrlParser: true });
  const db = await client.db(url.parse(uri).pathname.substr(1));
  cachedDb = db;
  return db;
}

const prepareQuery = (body) => body.params.map((param) => ({ $and: [param] }));

module.exports = async (req, res) => {
  const db = await connectToDatabase(process.env.MONGODB_URI);
  const { body } = req;
  const collection = await db.collection('questions');
  const questions = await collection.aggregate([
    { $match: { $or: prepareQuery(body) } },
    { $sample: { size: 2 } },
  ]).toArray();

  res.status(200).json({ questions });
};
