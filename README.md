# 🔄 RFID Translator

RFID Translator เป็นแอปพลิเคชันเว็บที่ช่วยแปลง Card ID ของบัตร RFID ให้เป็น Serial Number และกลับกันได้อย่างรวดเร็วและแม่นยำ

## 🌟 คุณสมบัติ

- 🔁 แปลง Card ID เป็น Serial Number และกลับกัน
- 🖥️ ใช้งานง่ายผ่านหน้าเว็บที่ออกแบบมาอย่างเรียบง่าย
- ⚡ ประมวลผลรวดเร็วด้วย Node.js backend
- 📱 รองรับการใช้งานบนอุปกรณ์ทุกขนาดหน้าจอ

## 🛠️ การติดตั้ง

1. ติดตั้ง [Node.js](https://nodejs.org/) บนเครื่องของคุณ
2. Clone repository นี้หรือดาวน์โหลด source code
3. เปิด Terminal และนำทางไปยังโฟลเดอร์ของโปรเจค
4. รันคำสั่งต่อไปนี้เพื่อติดตั้ง dependencies:
   ```
   npm install
   ```

## 🚀 การใช้งาน

1. เปิด Terminal และนำทางไปยังโฟลเดอร์ของโปรเจค
2. รันคำสั่งต่อไปนี้เพื่อเริ่มเซิร์ฟเวอร์:
   ```
   node server.js
   ```
3. เปิดเว็บเบราว์เซอร์และไปที่ `http://localhost:8080`
4. ใช้งานแอปพลิเคชันได้ทันที:
   - ป้อน Card ID (10 หลัก) เพื่อแปลงเป็น Serial Number
   - ป้อน Serial Number (8 หลักฐาน 16) เพื่อแปลงเป็น Card ID

## 📁 โครงสร้างโปรเจค

```
rfid-translator/
│
├── package.json
├── server.js
└── public/
    └── index.html
```

## 🔧 การแก้ไขปัญหา

หากคุณพบปัญหาใดๆ ลองทำตามขั้นตอนต่อไปนี้:

1. 🔍 ตรวจสอบให้แน่ใจว่าคุณได้ติดตั้ง dependencies ทั้งหมดแล้ว
2. 🚫 ตรวจสอบว่าพอร์ต 8080 ไม่ได้ถูกใช้งานโดยแอปพลิเคชันอื่น
3. 🖥️ ตรวจสอบ console ของเบราว์เซอร์และ terminal ที่รัน server เพื่อดูข้อความแสดงข้อผิดพลาด

หากยังคงมีปัญหา โปรดเปิด issue ใน repository นี้

## 📜 ลิขสิทธิ์

โปรเจคนี้เผยแพร่ภายใต้ลิขสิทธิ์ MIT License - ดูรายละเอียดได้ที่ไฟล์ [LICENSE](LICENSE)
