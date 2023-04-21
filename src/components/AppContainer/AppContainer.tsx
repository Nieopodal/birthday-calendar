import {ReactNode} from "react";

import styles from "./AppContainer.module.scss";

interface Props {
    children: ReactNode;
}

export const AppContainer = ({children}: Props) => (
    <div className={styles.app_container}>{children}</div>
);
