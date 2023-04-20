import {useState} from "react";
import {FormProvider, useForm} from "react-hook-form";
import {getYear} from "date-fns";
import {useLocalStorage} from "../../hooks/useLocalStorage";
import {FormInput} from "../common/FormInput/FormInput";
import {OneEntityIncludingEventDateAndType} from "../../types/OneEntity";
import {EventType} from "../../types/EventType";
import {EventTypeSelect} from "../EventTypeSelect/EventTypeSelect";
import {FindBirthdayResults} from "../FindBirthdayResults/FindBirthdayResults";

import styles from './StylesBirthday.module.scss';

interface InputFormData {
    name: string;
    eventType: EventType;
}

export const FindBirthday = () => {
    const {birthdayListFromState} = useLocalStorage();
    const [foundEntities, setFoundEntities] = useState<OneEntityIncludingEventDateAndType[] | null>(null);

    const methods = useForm<InputFormData>({
        defaultValues: {
            name: '',
            eventType: 0,
        },
    });

    const {handleSubmit} = methods;

    const formSubmitHandler = (data: InputFormData) => {
        const founded = birthdayListFromState
            .filter(el => el.name
                .toLowerCase()
                .includes(data.name.toLowerCase()));

        if (founded.length === 0) {
            setFoundEntities([]);
            return;
        }

        setFoundEntities(founded.map(el => {
            return {
                ...el,
                eventDate: new Date(`${getYear(new Date())}-${data.eventType === EventType.Birthday ? el.dateOfBirth.slice(5) : el.notificationDate.slice(5)}`),
                eventType: data.eventType,
            };
        }));
    };

    return <>
        <h3 className={styles.h3}>Find events by username (full or partial):</h3>

        <form onSubmit={handleSubmit(data => formSubmitHandler(data))}>
            <FormProvider {...methods}>
                <FormInput labelName="name" inputType="text" inputName="name" isRequired/>
                <EventTypeSelect/>
            </FormProvider>
            <button type="submit">Find!</button>
        </form>

        <FindBirthdayResults foundEntities={foundEntities}/>
    </>
};