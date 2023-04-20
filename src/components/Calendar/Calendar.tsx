import {useState} from "react";
import {format} from "date-fns";
import {ChangePeriodDirection} from "../../types/ChangePeriodDirection";
import {BackwardSvg} from "../Svg/BackwardSvg/BackwardSvg";
import {ForwardSvg} from "../Svg/ForwardSvg/ForwardSvg";
import {changePeriod} from "../../handlers/change-period";
import {CalendarPeriod} from "../../types/CalendarPeriod";
import {PeriodDays} from "../PeriodDays/PeriodDays";
import {EventType} from "../../types/EventType";
import {Square} from "../common/Square/Square";

import styles from './Calendar.module.scss';

const WEEKDAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

export const Calendar = () => {

    const [givenDate, setGivenDate] = useState<Date>(new Date());
    const [calendarPeriod, setCalendarPeriod] = useState<CalendarPeriod>(CalendarPeriod.Month);

    const changeCalendarViewBtnHandler = () => {
        setCalendarPeriod(prev => prev === CalendarPeriod.Week ? CalendarPeriod.Month : CalendarPeriod.Week);
    };

    const changePeriodBtnHandler = (direction: ChangePeriodDirection) => {
        setGivenDate(changePeriod(givenDate, direction, calendarPeriod));
    };

    return <>
        <h1 className={styles.h1}>{calendarPeriod === CalendarPeriod.Month ? `Monthly calendar` : `Weekly calendar`}</h1>
        <h2 className={styles.h2}>{calendarPeriod === CalendarPeriod.Month ? format(givenDate, "MMMM yyyy") : `Week number: ${format(givenDate, "ww/yyyy")}`}</h2>

        <div className={styles.nav}>
            <button onClick={() => changePeriodBtnHandler(ChangePeriodDirection.Previous)}><BackwardSvg/></button>
            <button onClick={() => changePeriodBtnHandler(ChangePeriodDirection.Next)}><ForwardSvg/></button>
        </div>

        <div className={styles.wrapper}>
            {
                WEEKDAYS.map((el, i) => <div className={styles.child} key={i}>{el}</div>)
            }
            <PeriodDays
                givenDate={givenDate}
                period={calendarPeriod}
            />
        </div>

        <div className={styles.footer}>
            <button className={styles.change_btn} onClick={changeCalendarViewBtnHandler}>Change view</button>
            <div className={styles.legend}>
                <Square background={EventType.Birthday}/> - Birthday,
                <Square background={EventType.Notification}/> - Reminder
            </div>
        </div>

    </>
};