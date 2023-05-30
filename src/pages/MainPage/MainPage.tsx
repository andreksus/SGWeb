import {FC} from "react";
import {MainHeader} from "../../components/headers/MainHeader/MainHeader";
import './Style.css'

export const MainPage: FC = () => {
    return (
        <div>
            <MainHeader/>
            <div className="classGrid">
                <img src="public/icons/IconsWebsites/IconVK.svg" className={"icon"} alt=""/>
                <img src="public/icons/IconsWebsites/IconTelegram.svg" className={"icon"} alt=""/>
                <img src="public/icons/IconsWebsites/IconGoogle.svg" className={"icon"} alt=""/>
                <img src="public/icons/IconsWebsites/IconYoutube.svg" className={"icon"} alt=""/>
                <img src="public/icons/IconsWebsites/IconRussianService.svg" className={"icon"} alt=""/>
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