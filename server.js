const express = require('express');
const db = require('./db');
const app = express();
const PORT = 3000;

app.use(express.static('public'));

app.get('/api/jobs', (req, res) => {
    const query = 'SELECT * FROM jobs';
    db.query(query, (err, results) => {
        if (err) throw err;
        res.json(results);
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
