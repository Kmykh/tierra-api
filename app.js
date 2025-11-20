const express = require('express');

// Crea una instancia de la aplicación Express
const app = express();

// Ruta raíz simple para comprobar el estado de la API
app.get('/tierra/status', (req, res) => {
  res.json({
    message: 'API TierraConnect funcionando correctamente.'
  });
});

// Inicia el servidor en el puerto 3000
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`API activa en el puerto ${port}`);
});