import {FC} from "react";
import * as React from "react";
import IntrinsicAttributes = React.JSX.IntrinsicAttributes;

interface WebsiteComponentProps extends IntrinsicAttributes{
    url: string,
    srcIcon: string,
    classStyle: string
}

export const WebsiteComponent: FC<WebsiteComponentProps> = ({url, srcIcon, classStyle}) => {
    console.log(url);
    return (
        <img src={srcIcon} className={classStyle} alt=""/>
    )
}