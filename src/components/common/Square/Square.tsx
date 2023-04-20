import {EventType} from "../../../types/EventType";

import styles from './Square.module.scss'
interface Props {
    background: EventType;
}

export const Square = ({background}: Props) => (
    <div className={`${styles.square} ${background === EventType.Birthday ? styles.birthday : styles.notification}`}></div>

);

