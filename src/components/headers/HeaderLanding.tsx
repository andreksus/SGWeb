import {FC} from "react";
import './Style.css'

export const HeaderLanding: FC = () => {
    return (
        <div>
            <div className={"header"}>
                <img src="public/icons/LogoHeader.svg" alt=""/>
                <button className={"btn"}>Log in</button>
            </div>
            <div className={"text"}>This is a new way to use websites more conveniently</div>
            <div className="rec1"></div>
            <div className="rec2"></div>
            <div className="rec3"></div>
            <div className="rec4"></div>
            <div className="rec5"></div>
            <div className="rec6"></div>
            <div className="rec7"></div>
        </div>
    );
}