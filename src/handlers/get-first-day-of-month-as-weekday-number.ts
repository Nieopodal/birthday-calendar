export const getFirstDayOfMonthAsWeekdayNumber = (dayName: string): number => {
    switch (dayName) {
        case "Mon":
            return 1;
        case "Tue":
            return 2;
        case "Wed":
            return 3;
        case "Thu":
            return 4;
        case "Fri":
            return 5;
        case "Sat":
            return 6;
        case "Sun":
            return 7;
        default:
            return 0;
    }
};