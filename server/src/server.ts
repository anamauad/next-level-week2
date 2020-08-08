import express from "express";

const app = express();
app.use(express.json());

app.get("/teachers", (request, response) => {
  response.json({ params: request.query, data: ["abc"] });
});

app.post("/teacher", (request, response) => {
  response.json({ action: "post teacher", data: request.body });
});

app.put("/teacher/:id", (request, response) => {
  response.json({
    action: "put teacher",
    id: request.params.id,
    data: request.body,
  });
});

app.delete("/teacher/:id", (request, response) => {
  response.json({ action: "delete teacher", id: request.params.id });
});

app.listen(3101);
