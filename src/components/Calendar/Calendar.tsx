import {useState} from "react";
import {format} from "date-fns";
import {MonthDays} from "../MonthDays/MonthDays";
import {changeMonth} from "../../handlers/change-month";
import {ChangeMonthDirection} from "../../types/ChangeMonthDirection";

import './Calendar.css';

export const Calendar = () => {

    const [givenDate, setGivenDate] = useState<Date>(new Date());

    const btnHandler = (direction: ChangeMonthDirection) => {
        setGivenDate(changeMonth(givenDate, direction));
    };

    return <>
        {format(givenDate, "MMMM yyyy")}
        <button onClick={() => btnHandler(ChangeMonthDirection.Previous)}>Previous</button>
        <button onClick={() => btnHandler(ChangeMonthDirection.Next)}>Next</button>

        <div className="wrapper">
            <div className="child">Mon</div>
            <div className="child">Tue</div>
            <div className="child">Wed</div>
            <div className="child">Thu</div>
            <div className="child">Fri</div>
            <div className="child">Sat</div>
            <div className="child">Sun</div>

            <MonthDays
                givenDate={givenDate}
            />

        </div>
    </>
};