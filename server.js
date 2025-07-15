const express = require('express');
const app = express();

// Dynamic GET route with route and query parameter
app.get('/welcome/:username', (req, res) => {
  const username = req.params.username; // Route parameter
  const role = req.query.role || 'Guest'; // Query parameter (optional, default to Guest)

  res.send(`Welcome ${username}, your role is ${role}`);
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
