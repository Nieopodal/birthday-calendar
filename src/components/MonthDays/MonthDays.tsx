import {useMonth} from "../../hooks/useMonth";
import {OneDay} from "../OneDay/OneDay";
import {useLocalStorage} from "../../hooks/useLocalStorage";
import {useEventsInMonth} from "../../hooks/useEventsInMonth";

interface Props {
    givenDate: Date;
}

export const MonthDays = ({givenDate}: Props) => {
    const {birthdayFromState} = useLocalStorage();
    const {daysInMonthListIncludingZeros, today} = useMonth(givenDate);
    const {
        entitiesWithBirthdayThisMonth,
        entitiesWithNotificationsThisMonth
    } = useEventsInMonth(givenDate, birthdayFromState);

    return <>
        {
            daysInMonthListIncludingZeros.map((el, i) =>
                <OneDay dayNumber={el} today={today} key={i}
                        entitiesWithBirthdayThisMonth={entitiesWithBirthdayThisMonth}
                        entitiesWithNotificationsThisMonth={entitiesWithNotificationsThisMonth}/>
            )
        }
    </>
};