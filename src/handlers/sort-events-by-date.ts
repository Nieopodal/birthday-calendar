import {OneEntityIncludingEventDateAndType} from "../types/OneEntity";

export const sortEventsByDate = (arr1: OneEntityIncludingEventDateAndType[], arr2: OneEntityIncludingEventDateAndType[]): OneEntityIncludingEventDateAndType[] => {
    return [...arr1, ...arr2].sort((a, b) => Number(a.eventDate) - Number(b.eventDate));
};