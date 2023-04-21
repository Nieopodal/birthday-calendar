import {OneEntity} from "../../types/OneEntity";
import {EventList} from "../common/EventList/EventList";

import styles from './Modal.module.scss';

interface Props {
    open: boolean;
    toggleOpen: () => void;
    todayBirthdayEntities: OneEntity[];
    todayNotificationEntities: OneEntity[];
}

export const Modal = ({open, toggleOpen, todayNotificationEntities, todayBirthdayEntities}: Props) => {

    if (!open) return null;

    return <div className={styles.modal}>
        <h3 className={styles.h3}>Wydarzenia:</h3>

        {
            todayBirthdayEntities.length > 0 &&
            <EventList header="Urodziny:" entitiesList={todayBirthdayEntities}/>
        }

        {
            todayNotificationEntities.length > 0 &&
            <EventList header="Pozostało 2 tygodnie - nie zapomnij o prezencie dla:"
                       entitiesList={todayNotificationEntities}/>
        }
        <div className={styles.action}>
            <button onClick={toggleOpen}>Zamknij</button>
        </div>

    </div>
};