const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/dbConfig');
const userRoutes = require('./routes/userRoutes');
const taskRoutes = require('./routes/taskRoutes');
const { Server } = require("socket.io");
const http = require('http');

dotenv.config();

const app = express();
const server = http.createServer(app);
const io = new Server(server);

// Conectar a MongoDB
connectDB();

// Middleware
app.use(express.json());

// Rutas
app.use('/api/users', userRoutes);
app.use('/api/tasks', taskRoutes);

// Configura el evento de conexión de Socket.IO
io.on('connection', (socket) => {
  console.log('Un nuevo cliente se ha conectado');

  // Manejo de eventos personalizados
  socket.on('sendMessage', (data) => {
    console.log('Mensaje recibido:', data);
    // Puedes enviar el mensaje a todos los clientes
    io.emit('receiveMessage', data);
  });

  // Manejo de desconexión
  socket.on('disconnect', () => {
    console.log('Un cliente se ha desconectado');
  });
});

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});


const PORT = process.env.PORT || 3000;
server.listen(PORT, () => console.log(`Servidor corriendo en el puerto ${PORT}`));
