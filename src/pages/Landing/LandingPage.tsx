import {FC} from "react";
import {LandingHeader} from "../../components/headers/LandingHeader/LandingHeader";
import {LandingBody} from "../../components/bodys/LandingBody/LandingBody";

export const LandingPage: FC = () => {
    return(
        <div>
            <LandingHeader/>
            <LandingBody/>
        </div>
    );
}