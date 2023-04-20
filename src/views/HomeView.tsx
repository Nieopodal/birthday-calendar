import {NavLink} from "react-router-dom";
import {useUpcomingEvents} from "../hooks/useUpcomingEvents";
import {format} from "date-fns";
import {EventList} from "../components/common/EventList";
import {EventType} from "../types/EventType";

export const HomeView = () => {
    const {sortedLimitedEntities} = useUpcomingEvents();

    return <>
        <h1>Home page!</h1>

        <NavLink to="/birthday-form">Go to birthday form</NavLink>
        <NavLink to="/calendar">Go to calendar</NavLink>

        <h2>Three upcoming events:</h2>
        {sortedLimitedEntities.length === 0 && <p>No events yet.</p>}

        {
            sortedLimitedEntities.map((el, i) => <EventList
                key={i}
                header={`${format(new Date(el.eventDate), "yyyy-MM-dd")} - ${el.eventType === EventType.Birthday ? "Urodziny" : "Nadchodzą urodziny"}`}
                entitiesList={[el]}
            />)
        }
    </>
};