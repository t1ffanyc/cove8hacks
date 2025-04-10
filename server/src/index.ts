import express, { Application } from "express";

// setup env variables
import dotenv from "dotenv"; 
import path from "path";
dotenv.config({
  path: path.resolve(__dirname, "../../.env")
});

import userRoutes from "./routes/userRoutes";
import { connectToDatabase } from "./config/db";
import logger from "./utils/logger";

// set up express app
const app: Application = express(); 
app.use(express.json()); // middleware for JSON parsing
const PORT = process.env.PORT || 3001;


async function startServer() {
  try {
    await connectToDatabase(); // wait for db connection

    // then start the server and register routes
    app.use("/api/users", userRoutes);

    app.listen(PORT, () => {
      logger.info(`Server is running on http://localhost:${PORT}`);
    });
  } catch (error) {
    logger.error("Failed to connect to the database or start the server:", error);
    process.exit(1);
  }
}

startServer();
// const { MongoClient } = require('mongodb');


// const uri = "mongodb+srv://ajkim0630:cove8hacks@cove8hacks.uqlyv.mongodb.net/?retryWrites=true&w=majority&appName=cove8hacks";

// const client = new MongoClient(uri);

// async function listDatabases(client){
//   databasesList = await client.db().admin().listDatabases();
//   console.log("Databases:");
//   databasesList.databases.forEach(db => console.log(` - ${db.name}`));
// };

// async function getUsersCollection(client) {
//   return client.db('cove8hacks').collection('users');
// }

// // route to list all users (GET /api/users)
// app.get('/api/users', async (req, res) => {
//   const client = new MongoClient(uri);
//   try {
//     await client.connect();
//     const collection = await getUsersCollection(client);
//     const users = await collection.find().toArray();  // Fetch all users
//     res.json(users);
//   } catch (e) {
//     res.status(500).json({ error: e.message });
//   } finally {
//     await client.close();
//   }
// });

// // route to create a new user (POST /api/users)
// app.post('/api/users', async (req, res) => {
//   const client = new MongoClient(uri);
//   const newUser = req.body;  // Get the user data from the request body

//   try {
//     await client.connect();
//     const collection = await getUsersCollection(client);
//     const result = await collection.insertOne(newUser);  // Insert new user
//     res.status(201).json(result);  // Respond with the created user
//   } catch (e) {
//     res.status(500).json({ error: e.message });
//   } finally {
//     await client.close();
//   }
// });

// // Start the Express server
// const PORT = process.env.PORT || 3001;
// app.listen(PORT, () => {
//   console.log(`Server is running on http://localhost:${PORT}`);
// });

// async function main() {
//   try {
//     await client.connect();
//     await listDatabases(client);
//   }
//   catch (e) {
//       console.error(e);
//   }
//   finally {
//     await client.close();
//   }
// }

// main().catch(console.error);





