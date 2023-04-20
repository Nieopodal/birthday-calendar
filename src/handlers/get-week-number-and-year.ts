import {format} from "date-fns";

export const getWeekNumberAndYear = (date: Date): string => `Tydzień numer: ${format(date, "ww/yyyy")}`;