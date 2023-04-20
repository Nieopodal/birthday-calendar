import {OneEntity} from "../../../types/OneEntity";

import styles from './EventList.module.scss';

interface Props {
    header: string;
    entitiesList: OneEntity[];

}

export const EventList = ({header, entitiesList}: Props) => (
    <>
        <h3 className={styles.h3}>{header}</h3>
        <ul>
            {entitiesList.map((el, i) =>
                <li key={i}>
                    <strong>{el.name} {el.surname}</strong>:
                    <div>Email: {el.email}</div>
                    <div>Data urodzenia: {el.dateOfBirth}</div>
                    <div>Zainteresowania: {el.hobbies}</div>
                </li>)
            }
        </ul>
    </>
);