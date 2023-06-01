import puppeteer from 'puppeteer-extra'
import StealthPlugin from "puppeteer-extra-plugin-stealth"

puppeteer.use(StealthPlugin())

async function openGoogle() {

    const browser = await puppeteer.launch({
        executablePath: 'C:/Users/Barys/AppData/Local/Mail.Ru/Atom/Application/atom.exe',
        headless: false,
        ignoreDefaultArgs: ['--enable-automation'],
        args: ['--start-maximized'],
        defaultViewport: null});

    const page = await browser.newPage();
    await page.goto('https://accounts.google.com/InteractiveLogin/identifier?continue=https%3A%2F%2Fmyaccount.google.com%3Futm_source%3Daccount-marketing-page%26utm_medium%3Dgo-to-account-button&service=accountsettings&ifkv=Af_xneH7piCoNz4oO6IbQqaIPQp2jM-NqDFnxnzJTPzrdLjg-itV8YzNI3i_tNQ4x4nbmWrUT5qtmg&flowName=GlifWebSignIn&flowEntry=ServiceLogin');               // переходим на google.com
    await page.waitForSelector(`#identifierNext > div > button > div.VfPpkd-RLmnJb`);

    await page.click(`#identifierId`);
    await page.keyboard.type("baryshev_2002@inbox.ru");
    await page.click("#identifierNext > div > button > div.VfPpkd-RLmnJb");

     await page.waitForSelector("#passwordNext > div > button > div.VfPpkd-RLmnJb");

     await page.waitForTimeout(2000);

     await page.click(`#password > div.aCsJod.oJeWuf > div > div.Xb9hP > input`);
     await page.keyboard.type("859and346rey");

     await page.click("#passwordNext > div > button > div.VfPpkd-RLmnJb");

}

openGoogle();