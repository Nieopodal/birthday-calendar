import {useState} from "react";
import {OneEntity} from "../../types/OneEntity";
import {Modal} from "../Modal/Modal";

interface Props {
    dayNumber: number;
    today: number | null;
    todayNotificationEntities: OneEntity[];
    todayBirthdayEntities: OneEntity[];
}

export const OneDayCard = ({dayNumber, todayNotificationEntities, todayBirthdayEntities, today}: Props) => {

    const [openModal, setOpenModal] = useState<boolean>(false);

    const toggleOpen = () => setOpenModal(prev => !prev);

    const btnHandler = () => {
        if (todayBirthdayEntities.length > 0 || todayNotificationEntities.length > 0) {
            toggleOpen();
        }
    };

    return <>

        <Modal open={openModal} toggleOpen={toggleOpen} todayNotificationEntities={todayNotificationEntities} todayBirthdayEntities={todayBirthdayEntities}/>

        {dayNumber === 0 && <div/>}

        {dayNumber > 0 && <button
            className={`one-day-card ${dayNumber === today ? 'today' : ''} ${todayNotificationEntities.length > 0 && 'notification'} ${todayBirthdayEntities.length > 0 && 'birthday'}`}
            onClick={btnHandler}
        >
            {dayNumber}
        </button>}
        </>
};