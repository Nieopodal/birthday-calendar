import {useEffect, useState} from "react";
import {OneEntity} from "../types/OneEntity";

export const useTodayEvents = (dayNumber: number, entitiesWithNotificationsThisMonth: OneEntity[], entitiesWithBirthdayThisMonth: OneEntity[]) => {
    const [todayNotificationEntities, setTodayNotificationEntities] = useState<OneEntity[]>([]);
    const [todayBirthdayEntities, setTodayBirthdayEntities] = useState<OneEntity[]>([]);
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        setLoading(true);
        const formattedOneDay = dayNumber < 10 ? `0${dayNumber}` : `${dayNumber}`;
        setTodayNotificationEntities(entitiesWithNotificationsThisMonth.filter((el) => el.notificationDate.slice(8) === formattedOneDay));
        setTodayBirthdayEntities(entitiesWithBirthdayThisMonth.filter((el) => el.dateOfBirth.slice(8) === formattedOneDay));
        setLoading(false);
    }, [dayNumber, entitiesWithNotificationsThisMonth, entitiesWithBirthdayThisMonth]);

    return {todayNotificationEntities, todayBirthdayEntities, loading};
};