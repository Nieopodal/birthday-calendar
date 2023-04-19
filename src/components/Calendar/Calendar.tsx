import {useState} from "react";
import {ChangePeriodDirection} from "../../types/ChangePeriodDirection";
import {changePeriod} from "../../handlers/change-period";
import {PeriodDays} from "../PeriodDays/PeriodDays";
import {CalendarPeriod} from "../../types/CalendarPeriod";

import './Calendar.css';
import {format} from "date-fns";

interface Props {
    period: CalendarPeriod;
}

export const Calendar = ({period}: Props) => {

    const [givenDate, setGivenDate] = useState<Date>(new Date());

    const btnHandler = (direction: ChangePeriodDirection) => {
        setGivenDate(changePeriod(givenDate, direction, period));
    };

    return <>
        <p>{period === CalendarPeriod.Month ? `Monthly calendar` : `Weekly calendar`}</p>
        <p>{period === CalendarPeriod.Month ? format(givenDate, "MMMM yyyy") : `Week number: ${format(givenDate, "ww/yyyy")}`}</p>

        <button onClick={() => btnHandler(ChangePeriodDirection.Previous)}>Previous</button>
        <button onClick={() => btnHandler(ChangePeriodDirection.Next)}>Next</button>

        <div className="wrapper">
            <div className="child">Mon</div>
            <div className="child">Tue</div>
            <div className="child">Wed</div>
            <div className="child">Thu</div>
            <div className="child">Fri</div>
            <div className="child">Sat</div>
            <div className="child">Sun</div>

            <PeriodDays
                givenDate={givenDate}
                period={period}
            />

        </div>
    </>
};