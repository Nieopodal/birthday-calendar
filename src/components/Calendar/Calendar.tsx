import {OneEntity} from "../../types/OneEntity";
import {useState} from "react";
import {addMonths, format} from "date-fns";

import './Calendar.css';
import {MonthDays} from "../MonthDays/MonthDays";
import {changeMonth} from "../../handlers/change-month";
import {ChangeMonthDirection} from "../../types/ChangeMonthDirection";

interface Props {
    birthdayFromState: OneEntity[];
}

export const Calendar = ({birthdayFromState}: Props) => {

    const [givenDate, setGivenDate] = useState<Date>(addMonths(new Date(), 1));

    const btnHandler = (direction: ChangeMonthDirection) => {
        setGivenDate(changeMonth(givenDate, direction));
    };

    return <>
        {format(givenDate, "MMMM")}
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

            <MonthDays givenDate={givenDate}/>
        </div>
    </>
};