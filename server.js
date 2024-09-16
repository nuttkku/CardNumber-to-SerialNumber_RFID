const express = require('express');
const app = express();
const port = 8080;

app.use(express.json());
app.use(express.static('public'));

app.post('/convert', (req, res) => {
    const cardId = req.body.input;
    const serialNumber = convertToSerialNumber(cardId);
    res.json({ result: serialNumber });
});

function convertToSerialNumber(cardId) {
    // ตรรกะการแปลง Card ID เป็น Serial number
    // นี่เป็นเพียงตัวอย่าง คุณอาจต้องปรับเปลี่ยนตามลอจิกจริงของระบบ RFID ของคุณ
    const decimal = parseInt(cardId, 16);
    const serialNumber = decimal.toString(16).toUpperCase().padStart(8, '0');
    return serialNumber.substr(6, 2) + serialNumber.substr(4, 2) + serialNumber.substr(2, 2) + serialNumber.substr(0, 2);
}

app.listen(port, () => {
    console.log(`RFID Translator running at http://localhost:${port}`);
});