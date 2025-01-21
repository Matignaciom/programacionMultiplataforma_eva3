const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");
const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json()); // Para analizar solicitudes JSON

// URL de la API de AWS
const apiUrl = "https://y0ugpcsqp3.execute-api.us-east-1.amazonaws.com/";

// Endpoint para agregar cliente
app.post("/insertar-cliente", async (req, res) => {
  const cliente = req.body;

  try {
    const response = await axios.post(`${apiUrl}/insertar-cliente`, cliente);
    res.status(200).send(response.data);
  } catch (error) {
    console.error("Error al agregar cliente:", error);
    res
      .status(500)
      .send("Error al agregar cliente. Intenta de nuevo más tarde.");
  }
});

// Endpoint para agregar producto
app.post("/insertar-producto", async (req, res) => {
  const producto = req.body;

  try {
    const response = await axios.post(`${apiUrl}/insertar-producto`, producto);
    res.status(200).send(response.data);
  } catch (error) {
    console.error("Error al agregar producto:", error);
    res
      .status(500)
      .send("Error al agregar producto. Intenta de nuevo más tarde.");
  }
});

// Endpoint para agregar envío
app.post("/insertar-envio", async (req, res) => {
  const envio = req.body;

  try {
    const response = await axios.post(`${apiUrl}/insertar-envio`, envio);
    res.status(200).send(response.data);
  } catch (error) {
    console.error("Error al agregar envío:", error);
    res.status(500).send("Error al agregar envío. Intenta de nuevo más tarde.");
  }
});

// Inicia el servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
