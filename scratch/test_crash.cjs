const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ headless: "new" });
  const page = await browser.newPage();
  
  page.on('pageerror', err => {
    console.error('PAGE ERROR:', err.message);
  });
  page.on('console', msg => {
    if (msg.type() === 'error') {
      console.error('CONSOLE ERROR:', msg.text());
    }
  });

  console.log('Navigating to home...');
  await page.goto('http://localhost:5173/');
  await page.waitForTimeout(1000);

  console.log('Navigating to privacy...');
  // Click a link if possible, or just evaluate window.history.pushState ? No, use page.goto
  // But wait, to test client-side routing, we need to click a router link.
  await page.evaluate(() => {
    const a = document.createElement('a');
    a.href = '/privacy';
    document.body.appendChild(a);
    a.click();
  });
  await page.waitForTimeout(1000);

  console.log('Navigating to about...');
  await page.evaluate(() => {
    const a = document.createElement('a');
    a.href = '/about';
    document.body.appendChild(a);
    a.click();
  });
  await page.waitForTimeout(1000);

  console.log('Done.');
  await browser.close();
})();
