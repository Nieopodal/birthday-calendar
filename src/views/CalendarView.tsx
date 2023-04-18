import {useLocalStorage} from "../hooks/useLocalStorage";
import {Calendar} from "../components/Calendar/Calendar";

export const CalendarView = () => {
    const {birthdayFromState} = useLocalStorage();

    return <>
        <p>Calendar view</p>
        <Calendar birthdayFromState={birthdayFromState}/>
        </>
};