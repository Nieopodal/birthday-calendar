import {format} from "date-fns";

export const checkIfThisMonthIsActual = (givenDate: Date): boolean => {
    const givenDateAsString = format(givenDate, 'yyyy-MM-dd');
    const todayAsString = format(new Date(), 'yyyy-MM-dd');

    return givenDateAsString.slice(0, 7) === todayAsString.slice(0, 7);
};