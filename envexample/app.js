import express from 'express';
import config from './src/config/config.js'
const app = express();

const PORT = config.port;

app.get('')

const server =  app.listen(PORT, () => console.log(`Server running on port: ${server.address().port}`))