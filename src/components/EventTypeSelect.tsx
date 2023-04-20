import {useFormContext} from "react-hook-form";
import {EventType} from "../types/EventType";

export const EventTypeSelect = () => {
    const {register} = useFormContext();

    return <select
        {...register("eventType",
            {
                valueAsNumber: true,
            })
        }>
        <option value={EventType.Birthday}>Find birthday</option>
        <option value={EventType.Notification}>Find notification day</option>
    </select>
};