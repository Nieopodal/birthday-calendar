import {ReactNode} from "react";

import "./AppContainer.css";

interface Props {
    children: ReactNode;
}

export const AppContainer = ({children}: Props) => {
    return <div className="app-container">{children}</div>
};