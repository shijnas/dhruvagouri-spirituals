import puppeteer from 'puppeteer-core';

async function capture() {
  const browser = await puppeteer.launch({
    executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  
  // 1. Desktop 1536x1024
  await page.setViewport({ width: 1536, height: 1024, deviceScaleFactor: 1 });
  await page.goto('http://localhost:5173/', { waitUntil: 'networkidle0' });
  await new Promise(r => setTimeout(r, 1500));

  // Category section screenshot
  const catSection = await page.$('section.bg-\\[\\#F5EFE1\\]');
  if (catSection) {
    await catSection.screenshot({ path: 'screenshot_categories.png' });
    console.log('Successfully captured screenshot_categories.png');
  }

  // Featured products screenshot
  const prodSection = await page.$('#featured-products');
  if (prodSection) {
    await prodSection.screenshot({ path: 'screenshot_products.png' });
    console.log('Successfully captured screenshot_products.png');
  }

  // Full top of page screenshot
  await page.screenshot({ path: 'screenshot_home_1536.png', clip: { x: 0, y: 0, width: 1536, height: 1024 } });
  console.log('Successfully captured screenshot_home_1536.png');

  // Mobile 390 screenshot
  await page.setViewport({ width: 390, height: 844, deviceScaleFactor: 1 });
  await page.goto('http://localhost:5173/', { waitUntil: 'networkidle0' });
  await new Promise(r => setTimeout(r, 1000));
  await page.screenshot({ path: 'screenshot_mobile_390.png' });
  console.log('Successfully captured screenshot_mobile_390.png');

  await browser.close();
}

capture().catch(err => {
  console.error('Capture error:', err);
  process.exit(1);
});
