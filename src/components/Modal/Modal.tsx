import {OneEntity} from "../../types/OneEntity";
import {EventList} from "../common/EventList";

import './Modal.css';

interface Props {
    open: boolean;
    toggleOpen: () => void;
    todayBirthdayEntities: OneEntity[];
    todayNotificationEntities: OneEntity[];
}

export const Modal = ({open, toggleOpen, todayNotificationEntities, todayBirthdayEntities}: Props) => {

    if (!open) return null;

    return <div className="modal">
        <h2>Dzisiejsze wydarzenia:</h2>

        {
            todayBirthdayEntities.length > 0 &&
            <EventList header="Urodziny" entitiesList={todayBirthdayEntities}/>
        }

        {
            todayNotificationEntities.length > 0 &&
            <EventList header="Niedługo urodziny obchodzi:" entitiesList={todayNotificationEntities}/>
        }

        <button onClick={toggleOpen}>Zamknij</button>
    </div>
};