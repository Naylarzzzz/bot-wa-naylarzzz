const puppeteer = require("puppeteer");

async function autoOrderFreeFire(idPlayer = "123456789") {
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  await page.goto("https://www.duniagames.co.id/");

  // Simulasi proses: hanya buka halaman dan selesai
  await page.waitForTimeout(5000); // nanti diganti isi form sesuai kebutuhan

  console.log("✅ Auto order simulasi selesai untuk ID:", idPlayer);
  await browser.close();
}

autoOrderFreeFire();
