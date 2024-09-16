const express = require('express');
const app = express();
const port = 8080;

app.use(express.json());
app.use(express.static('public'));

app.post('/convert', (req, res) => {
    const { input, direction } = req.body;
    let result;

    try {
        if (direction === 'toSerial') {
            result = convertToSerial(input);
        } else if (direction === 'toCardId') {
            result = convertToCardId(input);
        } else {
            throw new Error('Invalid direction');
        }
        res.json({ result });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

function convertToSerial(cardId) {
    // ตรวจสอบว่า input เป็นเลขฐาน 10 ที่ถูกต้อง
    if (!/^\d{10}$/.test(cardId)) {
        throw new Error('Invalid Card ID format. Must be 10 digits.');
    }
    
    // แปลงจากเลขฐาน 10 เป็นเลขฐาน 16
    const hex = parseInt(cardId, 10).toString(16).toUpperCase().padStart(8, '0');
    
    // สลับตำแหน่งตัวเลขตามที่ต้องการ
    return hex.substr(6, 2) + hex.substr(4, 2) + hex.substr(2, 2) + hex.substr(0, 2);
}

function convertToCardId(serialNumber) {
    // ตรวจสอบว่า input เป็นเลขฐาน 16 ที่ถูกต้อง
    if (!/^[0-9A-F]{8}$/.test(serialNumber)) {
        throw new Error('Invalid Serial Number format. Must be 8 hexadecimal characters.');
    }
    
    // สลับตำแหน่งตัวเลขกลับ
    const rearranged = serialNumber.substr(6, 2) + serialNumber.substr(4, 2) + 
                       serialNumber.substr(2, 2) + serialNumber.substr(0, 2);
    
    // แปลงจากเลขฐาน 16 เป็นเลขฐาน 10
    return parseInt(rearranged, 16).toString().padStart(10, '0');
}

app.listen(port, () => {
    console.log(`RFID Translator running at http://localhost:${port}`);
});