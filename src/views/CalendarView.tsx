import {useLocalStorage} from "../hooks/useLocalStorage";

export const CalendarView = () => {
    const {birthdayFromState} = useLocalStorage();

    return <>
        <p>Calendar view</p>
        {birthdayFromState && birthdayFromState.map((el, i) => <p key={i}>{el.name}</p>)}
        </>
};