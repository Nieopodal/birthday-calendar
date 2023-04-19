import {useEffect, useState} from "react";
import {addDays, format, getDaysInMonth, startOfMonth, startOfWeek} from "date-fns";
import {getFirstDayOfMonthAsWeekdayNumber} from "../handlers/get-first-day-of-month-as-weekday-number";
import {checkIfThisMonthIsActual} from "../handlers/check-if-this-month-is-actual";
import {CalendarPeriod} from "../types/CalendarPeriod";

export const usePeriod = (givenDate: Date, period: CalendarPeriod) => {

    const [today, setToday] = useState<number | null>(null);
    const [daysInPeriodListIncludingZeros, setDaysInPeriodListIncludingZeros] = useState<number[]>([]);
    const [datesInWeek, setDatesInWeek] = useState<string[]>([]);

    const handleMonthPeriod = () => {
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
        setDaysInPeriodListIncludingZeros(auxiliaryArray);
    };

    const handleWeekPeriod = () => {
        const firstDayInWeek = startOfWeek(givenDate, {weekStartsOn: 1});
        const auxiliaryArray = []
        for (let i = 0; i < 7; i++) {
            auxiliaryArray.push(format(addDays(firstDayInWeek, i), "yyyy-MM-dd"));
        }
        setDatesInWeek(auxiliaryArray);
    };

    useEffect(() => {
        if (period === CalendarPeriod.Month) {
            handleMonthPeriod();
        } else {
            handleWeekPeriod();
        }
    }, [givenDate, period]);

    return {daysInPeriodListIncludingZeros, datesInWeek, today};
};