import {useFormContext} from "react-hook-form";
import {EventType} from "../../types/EventType";

import styles from './EventTypeSelect.module.scss';

export const EventTypeSelect = () => {
    const {register} = useFormContext();

    return <label className={styles.label}>
        Typ wydarzenia:
        <select
            className={styles.select}
            {...register("eventType",
                {
                    valueAsNumber: true,
                })
            }>
            <option value={EventType.Birthday}>Urodziny</option>
            <option value={EventType.Notification}>Przypomnienie</option>
        </select>
    </label>
};