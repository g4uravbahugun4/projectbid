const express = require("express");
const app = express();

const { createServer } = require("http");

const httpServer = createServer(app);


const next = require("next");
const dev = process.env.NODE_ENV !== "production";
const nextApp = next({ dev });
const handle = nextApp.getRequestHandler();
require("dotenv").config({ path: "./config.env" });

const connectDb = require("./utilsServer/connectDb");
connectDb();

app.use(express.json());





const PORT = process.env.PORT || 3000;


nextApp.prepare().then(() => {
  

   app.use("/api/signup", require("./api/signup"));
  
  app.use("/api/auth", require("./api/auth"));
 
  app.use("/api/post", require("./api/post"));
  app.use("/api/profile", require("./api/profile"));
  app.use("/api/search", require("./api/search"));

  app.all("*", (req, res) => handle(req, res));
  
  httpServer.listen(PORT, err => {
    
    if (err) throw err;
    
  });
});
