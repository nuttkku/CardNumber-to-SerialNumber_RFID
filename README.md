# RFID Translator: แปลงรหัสบัตรสู่ซีเรียลนัมเบอร์

RFID Translator เป็นแอปพลิเคชันเว็บที่ช่วยแปลง Card ID ของบัตร RFID ให้เป็น Serial number อย่างรวดเร็วและแม่นยำ เหมาะสำหรับผู้ที่ทำงานกับระบบ RFID และต้องการเครื่องมือที่ใช้งานง่ายในการแปลงรหัส

## คุณสมบัติ

- แปลง Card ID ของบัตร RFID เป็น Serial number
- ใช้งานง่ายผ่านหน้าเว็บที่ออกแบบมาอย่างเรียบง่าย
- ประมวลผลรวดเร็วด้วย Node.js backend
- รองรับการใช้งานบนอุปกรณ์ทุกขนาดหน้าจอ

## สิ่งที่ต้องมีก่อน

ก่อนเริ่มต้น ตรวจสอบให้แน่ใจว่าคุณมีสิ่งต่อไปนี้:

- ติดตั้ง Node.js และ npm (Node Package Manager) แล้ว
- มีความเข้าใจพื้นฐานเกี่ยวกับ JavaScript และ HTML

## การติดตั้ง

ทำตามขั้นตอนเหล่านี้เพื่อติดตั้ง RFID Translator:

1. Clone repository หรือดาวน์โหลดซอร์สโค้ด
2. เปิด terminal และเข้าไปยังโฟลเดอร์ของโปรเจค
3. รันคำสั่งต่อไปนี้เพื่อติดตั้ง dependencies ที่จำเป็น:

```bash
npm install
```

## โครงสร้างโปรเจค

โปรเจคประกอบด้วยไฟล์หลัก 2 ไฟล์:

1. `server.js`: โค้ด Node.js สำหรับ server
2. `public/index.html`: ไฟล์ HTML สำหรับหน้าเว็บ

### server.js

ไฟล์นี้ประกอบด้วยการตั้งค่า Express server และตรรกะสำหรับการแปลง Card ID เป็น Serial number ต่อไปนี้คือคำอธิบายสั้นๆ ของส่วนสำคัญ:

```javascript
app.post('/convert', (req, res) => {
    const cardId = req.body.input;
    const serialNumber = convertToSerialNumber(cardId);
    res.json({ result: serialNumber });
});

function convertToSerialNumber(cardId) {
    // ตรรกะการแปลง Card ID เป็น Serial number
    // ...
}
```

### public/index.html

ไฟล์นี้ประกอบด้วยโครงสร้าง HTML และ JavaScript สำหรับหน้าเว็บ ส่วนสำคัญคือฟังก์ชัน `convertCardId`:

```javascript
async function convertCardId() {
    const input = document.getElementById('inputValue').value;
    const response = await fetch('/convert', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ input: input }),
    });
    const data = await response.json();
    document.getElementById('result').textContent = `Serial Number: ${data.result}`;
}
```

## การรันแอปพลิเคชัน

ทำตามขั้นตอนเหล่านี้เพื่อรัน RFID Translator:

1. เปิด terminal และเข้าไปยังโฟลเดอร์ของโปรเจค
2. รันคำสั่งต่อไปนี้:

```bash
node server.js
```

3. เปิดเว็บเบราว์เซอร์และไปที่ `http://localhost:8080`

## การใช้งาน

1. ป้อน Card ID ของบัตร RFID ในช่องอินพุต
2. คลิกปุ่ม "แปลง"
3. Serial number จะแสดงด้านล่างของปุ่ม

## การแก้ไขปัญหา

หากคุณพบปัญหาใดๆ ลองทำตามขั้นตอนต่อไปนี้:

1. ตรวจสอบให้แน่ใจว่าคุณได้ติดตั้ง dependencies ทั้งหมดแล้ว
2. ตรวจสอบว่า port 8080 ไม่ได้ถูกใช้งานโดยแอปพลิเคชันอื่น
3. ตรวจสอบ console ของเบราว์เซอร์และ terminal ที่รัน server เพื่อดูข้อความแสดงข้อผิดพลาด

หากยังคงมีปัญหา โปรดเปิด issue ใน repository นี้
