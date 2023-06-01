import puppeteer from "puppeteer";


async function openDiscord() {
    const browser = await puppeteer.launch({
        executablePath: 'C:/Users/Barys/AppData/Local/Mail.Ru/Atom/Application/atom.exe',
        headless: false,
        ignoreDefaultArgs: ['--enable-automation'],
        args: ['--start-maximized'],
        defaultViewport: null});

    const page = await browser.newPage();

    await page.goto('https://discord.com/login');               // переходим на google.com
    await page.waitForSelector(`#uid_5`);

    await page.click(`#uid_5`);
    await page.keyboard.type("baryshev_2002@inbox.ru");

    await page.click(`#uid_7`);
    await page.keyboard.type("859cmn346rtt")

    await page.click(`#app-mount > div.appAsidePanelWrapper-ev4hlp > div.notAppAsidePanel-3yzkgB > div.app-3xd6d0 > div > div > div > div > form > div.centeringWrapper-dGnJPQ > div > div.mainLoginContainer-wHmAjP > div.block-3uVSn4.marginTop20-2T8ZJx > button.marginBottom8-emkd0_.button-1cRKG6.button-ejjZWC.lookFilled-1H2Jvj.colorBrand-2M3O3N.sizeLarge-2xP3-w.fullWidth-3M-YBR.grow-2T4nbg`);

}

openDiscord();

// const puppeteer = require('puppeteer-extra')
// const StealthPlugin = require('puppeteer-extra-plugin-stealth')
// puppeteer.use(StealthPlugin())
//
// export async function getPic() {
//     const browser = await puppeteer.launch({
//         executablePath: 'C:/Users/Barys/AppData/Local/Mail.Ru/Atom/Application/atom.exe',
//         headless: false,
//         ignoreDefaultArgs: ['--enable-automation'],
//         args: ['--start-maximized'],
//         defaultViewport: null});
//
//     const page = await browser.newPage();
//     await page.setBypassCSP(true)
//     await page.goto("https://discord.com/login");
//     await page.waitForSelector(`#uid_5`);
//
//     await page.click(`#uid_5`);
//     await page.keyboard.type("baryshev_2002@inbox.ru");
//
//     await page.click(`#uid_7`);
//     await page.keyboard.type("859cmn346rtt")
//
//     await page.click(`#app-mount > div.appAsidePanelWrapper-ev4hlp > div.notAppAsidePanel-3yzkgB > div.app-3xd6d0 > div > div > div > div > form > div.centeringWrapper-dGnJPQ > div > div.mainLoginContainer-wHmAjP > div.block-3uVSn4.marginTop20-2T8ZJx > button.marginBottom8-emkd0_.button-1cRKG6.button-ejjZWC.lookFilled-1H2Jvj.colorBrand-2M3O3N.sizeLarge-2xP3-w.fullWidth-3M-YBR.grow-2T4nbg`);
//
// }
//
// getPic()
//
//
