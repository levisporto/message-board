const express = require('express')
const app = express()
const port = 3000
const path = require('path');


app.use(express.static('public'))

app.get('/messages', (req, res) => {
    const messages = db.prepare('SELECT * FROM message').all()
    res.json(messages)
    
})

// Import the better-sqlite3 library
const Database = require('better-sqlite3');

// Open (or create) an SQLite database file
const db = new Database('messages.db');

// Create a new table called 'users'
db.exec(`
  CREATE TABLE IF NOT EXISTS message (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nome TEXT NOT NULL,
    autor VARCHAR(180)
  );
`);

const insert = db.prepare('INSERT INTO message (nome, autor) VALUES (?, ?)');



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
