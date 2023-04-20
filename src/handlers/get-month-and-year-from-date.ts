import {format} from "date-fns";
import {pl} from "date-fns/locale";

export const getMonthAndYearFromDate = (date: Date): string => (format(date, "LLLL yyyy", {locale: pl}));