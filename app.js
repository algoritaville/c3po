'use strict'
const express = require('express')
const app = express()

app.use('/bmi', express.static('public'))
// Start the server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`bmi listening on port ${PORT}`);
  console.log('Press Ctrl+C to quit.');
});
