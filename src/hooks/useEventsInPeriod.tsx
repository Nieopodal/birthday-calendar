import {useEffect, useState} from "react";
import {format} from "date-fns";
import {OneEntity} from "../types/OneEntity";

export const useEventsInPeriod = (givenDate: Date, birthdayFromState: OneEntity[]) => {
    const [entitiesWithNotificationsThisPeriod, setEntitiesWithNotificationsThisPeriod] = useState<OneEntity[]>([]);
    const [entitiesWithBirthdayThisPeriod, setEntitiesWithBirthdayThisPeriod] = useState<OneEntity[]>([]);

    useEffect(() => {
        setEntitiesWithNotificationsThisPeriod(birthdayFromState.filter(el => el.notificationDate.slice(5, 7) === format(givenDate, "LL")));
        setEntitiesWithBirthdayThisPeriod(birthdayFromState.filter(el => el.dateOfBirth.slice(5, 7) === format(givenDate, "LL")));
    }, [birthdayFromState, givenDate]);

    return {entitiesWithNotificationsThisPeriod, entitiesWithBirthdayThisPeriod};
};