export async function Login(page) {
  try {
    await page.goto(
      `https://${process.env.AUTH_DOMAIN}/authorize?client_id=${process.env.AUTH_CLIENT_ID}&response_type=token&redirect_uri=${process.env.REDIRECT_URI}`,
      { waitUntil: "networkidle2" }
    );
    await page.waitForSelector('input[name="email"]', {
      visible: true,
      timeout: 5000
    });
    await page.type('input[name="email"]', process.env.EMAIL, { delay: 50 });
    await page.type('input[name="password"]', process.env.PASSWORD, { delay: 50 });
    await page.click('button[type="submit"]');
    await page.waitForNavigation({ waitUntil: "networkidle2" });
  } catch (error) {
    console.error(error)
  }
}