import {OneEntity} from "../../types/OneEntity";
import {useTodayEvents} from "../../hooks/useTodayEvents";
import {OneDayCard} from "../OneDayCard/OneDayCard";
import {CalendarPeriod} from "../../types/CalendarPeriod";

interface Props {
    dayNumber: number;
    monthNumberToPrint?: string;
    today: number | null;
    period: CalendarPeriod;
    entitiesWithBirthdayThisPeriod: OneEntity[];
    entitiesWithNotificationsThisPeriod: OneEntity[];
}

export const OneDay = ({
                           dayNumber,
                           today,
                           entitiesWithNotificationsThisPeriod,
                           entitiesWithBirthdayThisPeriod,
                           period,
                           monthNumberToPrint,
                       }: Props) => {

    const {
        todayNotificationEntities,
        todayBirthdayEntities,
        loading
    } = useTodayEvents(
        dayNumber,
        entitiesWithNotificationsThisPeriod,
        entitiesWithBirthdayThisPeriod
    );

    if (loading) return null;
    return <OneDayCard
        dayNumber={dayNumber}
        today={today}
        todayNotificationEntities={todayNotificationEntities}
        todayBirthdayEntities={todayBirthdayEntities}
        period={period}
        monthNumberToPrint={monthNumberToPrint}
    />
};