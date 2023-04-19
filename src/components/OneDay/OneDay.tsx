import {OneEntity} from "../../types/OneEntity";
import {useTodayEvents} from "../../hooks/useTodayEvents";
import {OneDayCard} from "./OneDayCard";

interface Props {
    dayNumber: number;
    today: number | null;
    entitiesWithBirthdayThisMonth: OneEntity[];
    entitiesWithNotificationsThisMonth: OneEntity[];
}

export const OneDay = ({
                           dayNumber,
                           today,
                           entitiesWithNotificationsThisMonth,
                           entitiesWithBirthdayThisMonth
                       }: Props) => {

    const {
        todayNotificationEntities,
        todayBirthdayEntities,
        loading
    } = useTodayEvents(dayNumber, entitiesWithNotificationsThisMonth, entitiesWithBirthdayThisMonth);

    if (loading) return null;
    return <OneDayCard dayNumber={dayNumber} today={today} todayNotificationEntities={todayNotificationEntities}
                       todayBirthdayEntities={todayBirthdayEntities}/>
};