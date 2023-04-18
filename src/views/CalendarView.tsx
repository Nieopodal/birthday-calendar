import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import { setFromLocalStorage} from "../features/birthday/birthday-slice";
import {RootState} from "../store";

export const CalendarView = () => {
    const dispatch = useDispatch();
    const {birthday: birthdayFromState} = useSelector((state: RootState) => state.birthday);

    useEffect(() => {
        if (birthdayFromState.length > 1) {
            console.log('pobrano ze stanu', birthdayFromState);
            return;
        }
        else if (birthdayFromState.length === 0) {
            console.log('stan pusty, sprawdzam localstorage');
            const birthdayList = localStorage.getItem("birthdayList");
            if (birthdayList) {
                const data = birthdayList.length > 0 ? JSON.parse(localStorage.getItem("birthdayList") as string) : null;

                if (data) {
                    console.log('znalazłem localstorage, zapisuję do stanu!');
                    console.log(data)

                    dispatch(setFromLocalStorage(data));
                    return
                }
            }
        }
    }, [dispatch, birthdayFromState]);


    return <>
        <p>Calendar view</p>
        {birthdayFromState && birthdayFromState.map((el, i) => <p key={i}>{el.name}</p>)}
        </>
};