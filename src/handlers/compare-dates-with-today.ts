import {addYears, getYear, isAfter, isSameDay} from "date-fns";
import {OneEntity, OneEntityIncludingEventDateAndType} from "../types/OneEntity";
import {EventType} from "../types/EventType";

export const compareDatesWithTodayHandler = (array: OneEntity[], eventType: EventType): OneEntityIncludingEventDateAndType[] => {
    return array.map(el => {
        const today = new Date();
        const eventThisYear = new Date(`${getYear(new Date())}-${ eventType === EventType.Birthday ? el.dateOfBirth.slice(5) : el.notificationDate.slice(5)}`);
        const eventNextYear = addYears(eventThisYear, 1);

        const isEventToday = isSameDay(today, eventThisYear);
        return {
            ...el,
            eventDate: isEventToday ? eventThisYear : (isAfter(today, eventThisYear) ? eventNextYear : eventThisYear),
            eventType: eventType,
        }
    });
};