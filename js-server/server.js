const express = require('express');

const app = express();
const PORT = 8001;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// No endpoints defined - ready for you to add your own routes

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(`Visit http://localhost:${PORT} to access the server`);
});
