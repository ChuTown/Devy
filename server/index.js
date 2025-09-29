const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

// Hello World endpoint
app.get('/api/hello', (_req, res) => {
  res.json({ 
    message: 'Hello World!', 
  });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
