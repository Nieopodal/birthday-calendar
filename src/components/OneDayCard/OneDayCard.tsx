import {useState} from "react";
import {OneEntity} from "../../types/OneEntity";
import {Modal} from "../Modal/Modal";
import {CalendarPeriod} from "../../types/CalendarPeriod";

import styles from "./OneDayCard.module.scss";

interface Props {
    dayNumber: number;
    monthNumberToPrint?: string;
    today: number | null;
    todayNotificationEntities: OneEntity[];
    todayBirthdayEntities: OneEntity[];
    period: CalendarPeriod;
}

export const OneDayCard = ({
                               dayNumber,
                               monthNumberToPrint,
                               todayNotificationEntities,
                               todayBirthdayEntities,
                               today,
                               period
                           }: Props) => {

    const [openModal, setOpenModal] = useState<boolean>(false);

    const toggleOpen = () => setOpenModal(prev => !prev);

    const btnHandler = () => {
        if (todayBirthdayEntities.length > 0 || todayNotificationEntities.length > 0) {
            toggleOpen();
        }
    };

    return <>
        <Modal
            open={openModal}
            toggleOpen={toggleOpen}
            todayNotificationEntities={todayNotificationEntities}
            todayBirthdayEntities={todayBirthdayEntities}
        />

        {dayNumber === 0 && <div/>}

        {
            dayNumber > 0 &&
            <div
                className={`${styles.card} ${dayNumber === today ? styles.today : ''} ${todayNotificationEntities.length > 0 && styles.notification} ${todayBirthdayEntities.length > 0 && styles.birthday}`}
                onClick={btnHandler}
            >
                {period === CalendarPeriod.Week ? `${dayNumber}/${monthNumberToPrint}` : dayNumber}
            </div>
        }
    </>
};