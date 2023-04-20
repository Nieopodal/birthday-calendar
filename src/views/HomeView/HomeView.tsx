import {NavLink} from "react-router-dom";
import {useUpcomingEvents} from "../../hooks/useUpcomingEvents";
import {format} from "date-fns";
import {EventList} from "../../components/common/EventList/EventList";
import {EventType} from "../../types/EventType";

import styles from './HomeView.module.scss';

export const HomeView = () => {
    const {sortedLimitedEntities} = useUpcomingEvents();

    return <>
        <h1 className={styles.h1}>Calendar - home page</h1>

        <NavLink className={styles.link} to="/birthday-form">Go to birthday form</NavLink>
        <NavLink className={styles.link} to="/calendar">Go to calendar</NavLink>
        <h2>Three upcoming events:</h2>
        {sortedLimitedEntities.length === 0 && <p>No events yet.</p>}

        {
            sortedLimitedEntities.map((el, i) => <EventList
                key={i}
                header={`${format(new Date(el.eventDate), "yyyy-MM-dd")} - ${el.eventType === EventType.Birthday ? "Birthday:" : "Remember - buy a gift for:"}`}
                entitiesList={[el]}
            />)
        }
    </>
};