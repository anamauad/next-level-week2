import express from "express";
import cors from "cors";
import routes from "./routes";

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

const port = 3101;
app.listen(port);

console.info();
console.info("proffy server running on port 3101");
console.info();
