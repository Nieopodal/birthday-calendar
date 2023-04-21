import {ChangePeriodDirection} from "../types/ChangePeriodDirection";
import {addMonths, addWeeks, subMonths, subWeeks} from "date-fns";
import {CalendarPeriod} from "../types/CalendarPeriod";

export const changePeriod = (givenDate: Date, direction: ChangePeriodDirection, period: CalendarPeriod): Date => {
    switch (direction) {
        case ChangePeriodDirection.Next: {
            return period === CalendarPeriod.Week
                ? addWeeks(givenDate, 1)
                : addMonths(givenDate, 1);
        }
        case ChangePeriodDirection.Previous: {
            return period === CalendarPeriod.Week
                ? subWeeks(givenDate, 1)
                : subMonths(givenDate, 1);
        }
    }
};