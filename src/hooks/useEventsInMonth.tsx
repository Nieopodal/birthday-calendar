import {OneEntity} from "../types/OneEntity";
import {useEffect, useState} from "react";
import {format} from "date-fns";

export const useEventsInMonth = (givenDate: Date, birthdayFromState: OneEntity[]) => {
    const [entitiesWithNotificationsThisMonth, setEntitiesWithNotificationsThisMonth] = useState<OneEntity[]>([]);
    const [entitiesWithBirthdayThisMonth, setEntitiesWithBirthdayThisMonth] = useState<OneEntity[]>([]);

    useEffect(() => {
        setEntitiesWithNotificationsThisMonth(birthdayFromState.filter(el => el.notificationDate.slice(5, 7) === format(givenDate, "LL")));
        setEntitiesWithBirthdayThisMonth(birthdayFromState.filter(el => el.dateOfBirth.slice(5, 7) === format(givenDate, "LL")));
    }, [birthdayFromState, givenDate]);

    return {entitiesWithNotificationsThisMonth, entitiesWithBirthdayThisMonth};
};