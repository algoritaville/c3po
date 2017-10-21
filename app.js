'use strict'
const express = require('express')
const app = express()

app.use('/c3po', express.static('public'))
// Start the server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`c3po listening on port ${PORT}`);
  console.log('Press Ctrl+C to quit.');
});
