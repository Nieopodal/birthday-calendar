import {useLocalStorage} from "../hooks/useLocalStorage";
import {Calendar} from "../components/Calendar/Calendar";
import {useState} from "react";
import {CalendarPeriod} from "../types/CalendarPeriod";

export const CalendarView = () => {
    useLocalStorage();

    const [toggleCalendarView, setToggleCalendarView] = useState<CalendarPeriod>(CalendarPeriod.Month);

    const btnHandler = () => {
        setToggleCalendarView(prev => {
            if (prev === CalendarPeriod.Week) return CalendarPeriod.Month;
            else return CalendarPeriod.Week;
        });
    };

    return <>
        <p>Calendar view</p>
        <button onClick={btnHandler}>Change view</button>
        <Calendar period={toggleCalendarView}/>
    </>
};