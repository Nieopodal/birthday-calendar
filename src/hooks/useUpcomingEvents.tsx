import {useEffect, useState} from "react";
import {useLocalStorage} from "./useLocalStorage";
import {EventType} from "../types/EventType";
import {compareDatesWithTodayHandler} from "../handlers/compare-dates-with-today";
import {OneEntityIncludingEventDateAndType} from "../types/OneEntity";
import {sortEventsByDate} from "../handlers/sort-events-by-date";

export const useUpcomingEvents = () => {
    const {birthdayListFromState} = useLocalStorage();
    const [sortedLimitedEntities, setSortedLimitedEntities] = useState<OneEntityIncludingEventDateAndType[]>([]);

    useEffect(() => {
        const entitiesComparedByBirthdayDate = compareDatesWithTodayHandler(birthdayListFromState, EventType.Birthday);
        const entitiesComparedByNotificationDate = compareDatesWithTodayHandler(birthdayListFromState, EventType.Notification);

        const sortedEvents = sortEventsByDate(entitiesComparedByBirthdayDate, entitiesComparedByNotificationDate);
        const shortenedList = sortedEvents.length > 3 ? sortedEvents.slice(0, 3) : sortedEvents;

        setSortedLimitedEntities(shortenedList);
    }, [birthdayListFromState]);

    return {sortedLimitedEntities};
};