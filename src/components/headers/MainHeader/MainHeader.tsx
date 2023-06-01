import {FC} from "react";
import './Style.css'

export const MainHeader: FC = () => {
    return (
        <div>
            <div className={"header"}>
                <img src="public/icons/LandingHeader/LogoHeader.svg" className={"logo"} alt=""/>
                <button className={"btn"}>Log out</button>
            </div>
        </div>
    );
}