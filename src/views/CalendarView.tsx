import {useState} from "react";
import {Calendar} from "../components/Calendar/Calendar";
import {CalendarPeriod} from "../types/CalendarPeriod";
import {FindBirthday} from "../components/FindBirthday/FindBirthday";

export const CalendarView = () => {

    const [toggleCalendarView, setToggleCalendarView] = useState<CalendarPeriod>(CalendarPeriod.Month);

    const changeCalendarViewBtnHandler = () => {
        setToggleCalendarView(prev => {
            if (prev === CalendarPeriod.Week) return CalendarPeriod.Month;
            else return CalendarPeriod.Week;
        });
    };

    return <>
        <h1>Calendar view</h1>
        <button onClick={changeCalendarViewBtnHandler}>Change view</button>
        <Calendar period={toggleCalendarView}/>
        <FindBirthday/>
    </>
};