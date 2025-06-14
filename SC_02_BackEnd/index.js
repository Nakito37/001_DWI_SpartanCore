const express = require('express');
const connectMongo = require('./db/mongo');
const mysqlRoutes = require('./routes/mysqlRoutes');
const mongoRoutes = require('./routes/mongoRoutes');

const app = express();
app.use(express.json());

connectMongo();

app.use('/api/mysql', mysqlRoutes);
app.use('/api/mongo', mongoRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor corriendo en puerto ${PORT}`));
