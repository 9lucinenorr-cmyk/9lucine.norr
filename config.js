// เปลี่ยน URL หลัง Deploy Google Apps Script แล้ว
// อย่าป้อน API key, รหัสผ่าน หรือข้อมูลส่วนตัวในไฟล์นี้ — เป็นไฟล์สาธารณะ
window.STORE_CONFIG = {
  scriptUrl: "",
  shopName: "9lumine",
  contactEmail: "", // optional: public shop email only
  shippingNote: "ค่าจัดส่งจริงคำนวณตามจำนวนสินค้าในหน้าชำระเงิน",
  // ข้อมูลตัวอย่างแสดงเฉพาะเมื่อยังไม่เชื่อม Apps Script
  demoProducts: [
    {sku:"STK-001", name:"Unfiltered Thoughts — Sticker Sheet", category:"STICKERS", price:69, stock:12, color:"#f6bdd1",emoji:"✳",description:"เรื่องเล็ก ๆ สำหรับติดไว้ในวันที่โลกไม่เข้าท่า"},
    {sku:"KEY-001", name:"Little Existential Keychain",category:"KEYCHAINS",price:79,stock:8,color:"#c9d9ff",emoji:"☻",description:"พวงกุญแจชิ้นเล็ก สำหรับเรื่องใหญ่ในหัว"},
    {sku:"BOOK-001", name:"Printed Thoughts — Book",category:"BOOKS",price:229,stock:20,color:"#d9d9a9",emoji:"▧",description:"หน้ากระดาษสำหรับความคิดที่ไม่ได้ขออนุญาต"},
    {sku:"STK-002",name:"Everyday Absurdity — Sticker",category:"STICKERS",price:49,stock:15,color:"#d2dcbf",emoji:"★",description:"อุปกรณ์จำเป็นสำหรับการมีชีวิตแบบงง ๆ"}
  ]
};
