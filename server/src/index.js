import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import "dotenv/config";
import { userRouter } from "./routes/user.js";
import { recipesRouter } from "./routes/recipes.js";
import path from 'path';
const __dirname = path.resolve();

const app = express();

const port = process.env.PORT;
const uri = process.env.MONGO_URL;

const rootDir = path.resolve(__dirname, '..');
const buildDir = path.resolve(rootDir, 'server/build');

//console.log("__dirname", __dirname)
//console.log("rootDir", rootDir)

app.use(express.static(buildDir));
app.use(express.json());
app.use(cors());
app.use("/auth", userRouter);
app.use("/recipes", recipesRouter);

app.get("*", (req, res) => {
  res.sendFile(path.resolve(buildDir, "index.html"));
});

async function connectToMongoDB() {
  try {
    await mongoose.connect(uri);
    console.log("Connected to MongoDB using Mongoose");
    app.listen(port, () => {
      console.log(`App is listening on port: ${port}`);
    });
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
}

connectToMongoDB();
