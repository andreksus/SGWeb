import {MainHeader} from "../../components/headers/MainHeader/MainHeader";
import './Style.css'
//import {WebsiteComponent} from "../../components/WebsiteComponent/WebsiteComponent";
import {FC, useEffect} from "react";
import {IWebSiteRecord} from "../../components/WebsiteComponent/IWebSiteRecord";
import puppeteer from "puppeteer";


export const MainPage: FC = () => {
    const webSites = new Array<IWebSiteRecord>();
    let webSite: IWebSiteRecord;
    async function getWebS(){
        try {
            const response = await fetch('http://localhost:8080/webS');
            const jsonResponse = await response.json();
            jsonResponse.map((x: IWebSiteRecord) => {
                webSite = x;
                webSites.push(webSite)
                webSites.map((x: any) => console.log(x.id))
            console.log(webSites[0])})
        }
        catch (error) {
            console.log(error);
        }
    }

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

    useEffect(() => {
        getWebS().catch(() => console.log(Error));

    }, []);

    return (
        <div>
            <MainHeader/>
            <div className="classGrid">
                {/*<WebsiteComponent onClick={() => alert(webSites[0])} url={"asd"} classStyle={"icon"} srcIcon={"public/icons/IconsWebsites/IconTelegram.svg"}/>*/}
                {/*<WebsiteComponent url={"asd"} classStyle={"icon"} srcIcon={"public/icons/IconsWebsites/IconVk.svg"}/>*/}
                {/*<WebsiteComponent url={"asd"} classStyle={"icon"} srcIcon={"public/icons/IconsWebsites/IconGoogle.svg"}/>*/}
                {/*<WebsiteComponent url={"asd"} classStyle={"icon"} srcIcon={"public/icons/IconsWebsites/IconYoutube.svg"}/>*/}
                {/*<WebsiteComponent url={"asd"} classStyle={"icon"} srcIcon={"public/icons/IconsWebsites/IconRussianService.svg"}/>*/}
                {/*<WebsiteComponent url={"asd"} classStyle={"icon"} srcIcon={"public/icons/IconsWebsites/IconDiscord.svg"}/>*/}
                <img src="public/icons/IconsWebsites/IconVK.svg" alt="" onClick={() => console.log(1)} className={"icon"}/>
                <img src="public/icons/IconsWebsites/IconTelegram.svg" alt="" onClick={() => console.log(1)} className={"icon"}/>
                <img src="public/icons/IconsWebsites/IconGoogle.svg" alt="" onClick={() => console.log(1)} className={"icon"}/>
                <img src="public/icons/IconsWebsites/IconYoutube.svg" alt="" onClick={() => console.log(1)} className={"icon"}/>
                <img src="public/icons/IconsWebsites/IconRussianService.svg" alt="" onClick={() => console.log(1)} className={"icon"}/>
                <img src="public/icons/IconsWebsites/IconDiscord.svg" alt="" onClick={openDiscord} className={"icon"}/>
            </div>
            <div className="rec1"></div>
            <div className="rec2"></div>
            <div className="rec3"></div>
            <div className="rec4"></div>
            <div className="rec5"></div>
            <div className="rec6"></div>
            <div className="rec7"></div>
        </div>
    )
}

