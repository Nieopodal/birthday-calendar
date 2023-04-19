import {useEffect, useState} from "react";
import {format, getDaysInMonth, startOfMonth} from "date-fns";
import {getFirstDayOfMonthAsWeekdayNumber} from "../handlers/get-first-day-of-month-as-weekday-number";
import {checkIfThisMonthIsActual} from "../handlers/check-if-this-month-is-actual";

export const useMonth = (givenDate: Date) => {

    const [today, setToday] = useState<number | null>(null);
    const [daysInMonthListIncludingZeros, setDaysInMonthListIncludingZeros] = useState<number[]>([]);

    useEffect(() => {
        const daysInMonth = getDaysInMonth(givenDate);
        const firstDayInMonthName = format(startOfMonth(givenDate), "E");
        const weekdayNumber = getFirstDayOfMonthAsWeekdayNumber(firstDayInMonthName);

        const isActual = checkIfThisMonthIsActual(givenDate);

        if (isActual) {
            setToday(Number(format(new Date(), "d")));
        } else {
            setToday(null);
        }

        const auxiliaryArray: number[] = [];
        const auxiliaryArrayLength = daysInMonth + weekdayNumber;

        for (let i = 1; i < auxiliaryArrayLength; i++) {
            if (i < weekdayNumber) {
                auxiliaryArray.push(0);
            } else if (i >= weekdayNumber) {
                if (auxiliaryArray.length === 0) {
                    auxiliaryArray.push(1);
                } else {
                    auxiliaryArray.push(auxiliaryArray[auxiliaryArray.length - 1] + 1);
                }
            } else {
                auxiliaryArray.push(0);
            }
        }

        setDaysInMonthListIncludingZeros(auxiliaryArray);
    }, [givenDate]);

    return {daysInMonthListIncludingZeros, today};
};