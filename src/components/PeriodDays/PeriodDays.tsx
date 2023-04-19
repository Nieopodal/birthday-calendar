import React from "react";
import {usePeriod} from "../../hooks/usePeriod";
import {useLocalStorage} from "../../hooks/useLocalStorage";
import {useEventsInPeriod} from "../../hooks/useEventsInPeriod";
import {CalendarPeriod} from "../../types/CalendarPeriod";
import {OneDay} from "../OneDay/OneDay";

interface Props {
    givenDate: Date;
    period: CalendarPeriod;
}

export const PeriodDays = ({givenDate, period}: Props) => {
    const {birthdayFromState} = useLocalStorage();
    const {daysInPeriodListIncludingZeros, today, datesInWeek} = usePeriod(givenDate, period);
    const {
        entitiesWithBirthdayThisPeriod,
        entitiesWithNotificationsThisPeriod
    } = useEventsInPeriod(givenDate, birthdayFromState);

    return <>

        {period === CalendarPeriod.Month &&
            daysInPeriodListIncludingZeros.map((el, i) =>
                <OneDay dayNumber={el} today={today} key={i}
                        entitiesWithBirthdayThisPeriod={entitiesWithBirthdayThisPeriod}
                        entitiesWithNotificationsThisPeriod={entitiesWithNotificationsThisPeriod} period={period}/>
            )

        }

        {
            period === CalendarPeriod.Week &&
            datesInWeek.map((el, i) =>
                <OneDay key={i} dayNumber={Number(el.slice(8, 10))} today={today}
                        entitiesWithBirthdayThisPeriod={entitiesWithBirthdayThisPeriod}
                        entitiesWithNotificationsThisPeriod={entitiesWithNotificationsThisPeriod} period={period}
                        monthNumberToPrint={(el.slice(5, 7))}/>
            )
        }
    </>
};