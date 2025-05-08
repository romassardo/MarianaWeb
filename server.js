/**
 * Servidor Express simple para el portfolio de Mariana Tirante
 * Optimizado para despliegue en Railway
 */

const express = require('express');
const compression = require('compression');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Usar compresión para mejorar rendimiento
app.use(compression());

// Servir archivos estáticos desde el directorio raíz
app.use(express.static(__dirname));

// Manejar todas las rutas para SPA
app.get('*', (req, res) => {
  // Si la solicitud es para una página específica, servir esa página HTML
  const requestPath = req.path.substring(1); // Quitar la barra inicial
  
  if (requestPath === '' || requestPath === '/') {
    return res.sendFile(path.join(__dirname, 'index.html'));
  }
  
  const htmlPath = path.join(__dirname, `${requestPath}.html`);
  const indexPath = path.join(__dirname, 'index.html');
  
  // Intentar servir el archivo HTML específico, o redirigir a index si no existe
  res.sendFile(htmlPath, (err) => {
    if (err) {
      res.status(200).sendFile(indexPath);
    }
  });
});

app.listen(PORT, () => {
  console.log(`Sitio web de Mariana Tirante ejecutándose en el puerto ${PORT}`);
});
