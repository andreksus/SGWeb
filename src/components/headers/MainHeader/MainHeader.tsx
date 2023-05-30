import {FC} from "react";
import './Style.css'

export const MainHeader: FC = () => {
    return (
        <div>
            <div className={"header"}>
                <img src="public/icons/LandingHeader/LogoHeader.svg" alt=""/>
                <button className={"btn"}>Log out</button>
            </div>
        </div>
    );
}