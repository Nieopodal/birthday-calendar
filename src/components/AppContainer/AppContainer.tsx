import {ReactNode} from "react";

import "./AppContainer.scss";

interface Props {
    children: ReactNode;
}

export const AppContainer = ({children}: Props) => {
    return <div className={"app-container"}>{children}</div>;
};