import {ChangeMonthDirection} from "../types/ChangeMonthDirection";
import {addMonths, subMonths} from "date-fns";

export const changeMonth = (givenDate: Date, direction: ChangeMonthDirection) => {
    switch (direction) {
        case ChangeMonthDirection.Next: {
            return addMonths(givenDate, 1);
        }
        case ChangeMonthDirection.Previous: {
            return subMonths(givenDate, 1);
        }
    }
};