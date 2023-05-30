import {FC} from "react";
import './Style.css'

export const LandingHeader: FC = () => {
    return (
        <div>
            <div className={"header"}>
                <img src="public/icons/LandingHeader/LogoHeader.svg" alt=""/>
                <button className={"btn"}>Log in</button>
            </div>
        </div>
    );
}