require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const helmet = require('helmet')
const {NODE_ENV} = require('./config');
const errorHandler = require('./error-handler')
const logger = require('./logger');
const foldersRouter = require('./folders/folders-router')
const NotesRoute = require('./notes/notes-router')

const app = express()
const morganOption = (NODE_ENV === 'production')
  ? 'tiny'
  : 'common';

app.use(morgan(morganOption))
app.use(helmet())
app.use(cors())
app.get('/', (req, res) => {
    res.send('Hello, world!');
})

app.use('/api/folders', foldersRouter);
app.use('/api/notes', NotesRoute);
app.use(errorHandler);

module.exports = app