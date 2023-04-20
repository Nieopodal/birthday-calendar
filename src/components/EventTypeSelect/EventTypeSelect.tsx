import {useFormContext} from "react-hook-form";
import {EventType} from "../../types/EventType";

import styles from './EventTypeSelect.module.scss';

export const EventTypeSelect = () => {
    const {register} = useFormContext();

    return <label className={styles.label}>
        Find event:
        <select
            {...register("eventType",
                {
                    valueAsNumber: true,
                })
            }>
            <option value={EventType.Birthday}>Find birthday</option>
            <option value={EventType.Notification}>Find notification day</option>
        </select>
    </label>
};