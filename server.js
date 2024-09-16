const express = require('express');
const app = express();
const port = 8080;

app.use(express.json());
app.use(express.static('public'));

app.post('/convert', (req, res) => {
    const inputValue = parseInt(req.body.input);
    const hexValue = inputValue.toString(16).toUpperCase();
    const rearranged = rearrangeHex(hexValue);
    res.json({ result: rearranged });
});

function rearrangeHex(hex) {
    // Pad the hex string to ensure it's 8 characters long
    hex = hex.padStart(8, '0');
    return hex.substr(6, 2) + hex.substr(4, 2) + hex.substr(2, 2) + hex.substr(0, 2);
}

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});