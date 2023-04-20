import {NavLink} from "react-router-dom";
import {format} from "date-fns";
import {useUpcomingEvents} from "../../hooks/useUpcomingEvents";
import {EventList} from "../../components/common/EventList/EventList";
import {returnEventTextHandler} from "../../handlers/return-event-text";

import styles from './HomeView.module.scss';

export const HomeView = () => {
    const {sortedLimitedEntities} = useUpcomingEvents();

    return <>
        <h1 className={styles.h1}>Kalendarz - strona główna</h1>

        <NavLink className={styles.link} to="/birthday-form">Strona formularza</NavLink>
        <NavLink className={styles.link} to="/calendar">Kalendarz</NavLink>
        <h2>Trzy nachodzące wydarzenia:</h2>
        {sortedLimitedEntities.length === 0 && <p>Brak nadchodzących wydarzeń.</p>}

        {
            sortedLimitedEntities.map((el, i) => <EventList
                key={i}
                header={`${format(new Date(el.eventDate), "yyyy-MM-dd")} - ${returnEventTextHandler(el.eventType)}`}
                entitiesList={[el]}
            />)
        }
    </>
};

