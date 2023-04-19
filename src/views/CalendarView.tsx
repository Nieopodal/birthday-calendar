import {useLocalStorage} from "../hooks/useLocalStorage";
import {Calendar} from "../components/Calendar/Calendar";

export const CalendarView = () => {
   useLocalStorage();

    return <>
        <p>Calendar view</p>
        <Calendar/>
        </>
};