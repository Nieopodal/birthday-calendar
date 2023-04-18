import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../store";
import {useEffect} from "react";
import {setFromLocalStorage} from "../features/birthday/birthday-slice";

export const useLocalStorage = () => {
    const dispatch = useDispatch();
    const {birthday: birthdayFromState} = useSelector((state: RootState) => state.birthday);

    useEffect(() => {
        if (birthdayFromState.length > 1) {
            return;
        }
        else if (birthdayFromState.length === 0) {
            console.log('stan pusty, sprawdzam localstorage');
            const birthdayList = localStorage.getItem("birthdayList");
            if (birthdayList) {
                const data = birthdayList.length > 0 ? JSON.parse(localStorage.getItem("birthdayList") as string) : null;

                if (data) {
                    console.log('znalazłem localstorage, zapisuję do stanu!');
                    dispatch(setFromLocalStorage(data));
                    return;
                }
            }
        }
    }, [dispatch, birthdayFromState]);

    return {birthdayFromState};
};