import dns from "dns";
import dotenv from "dotenv";
dns.setServers(["8.8.8.8", "1.1.1.1"]);
dotenv.config();

const express = require('express');
const cors = require('cors');
const user = require('./controller/user');
const intern = require('./controller/company');
const admin = require('./controller/admin');
import initializeDatabase from './db/db';

const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);
app.use('/uploads', express.static('uploads'));
app.use('/resume', express.static('resume'));

app.get('/', (req: any, res: any) => {
  res.send({ msg: "My api up and running successfully" });
});

app.use('/user', user);
app.use('/company', intern);
app.use('/admin', admin);

initializeDatabase().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}).catch((error) => {
  console.error('Failed to connect to database:', error);
});