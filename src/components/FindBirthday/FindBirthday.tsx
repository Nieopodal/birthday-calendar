import {useState} from "react";
import {FormProvider, useForm} from "react-hook-form";
import {getYear} from "date-fns";
import {useLocalStorage} from "../../hooks/useLocalStorage";
import {FormInput} from "../common/FormInput";
import {OneEntityIncludingEventDateAndType} from "../../types/OneEntity";
import {EventList} from "../common/EventList";
import {EventType} from "../../types/EventType";
import {EventTypeSelect} from "../EventTypeSelect";

interface InputFormData {
    name: string;
    eventType: EventType;
}

export const FindBirthday = () => {
    const {birthdayFromState} = useLocalStorage();
    const [foundEntities, setFoundEntities] = useState<OneEntityIncludingEventDateAndType[]>([]);

    const methods = useForm<InputFormData>({
        defaultValues: {
            name: '',
            eventType: 0,
        },
    });

    const {handleSubmit} = methods;

    const formSubmitHandler = (data: InputFormData) => {
        const founded = birthdayFromState
            .filter(el => el.name
                .toLowerCase()
                .includes(data.name.toLowerCase()));

        setFoundEntities(founded.map(el => {
            return {
                ...el,
                eventDate: `${getYear(new Date())}-${data.eventType === EventType.Birthday ? el.dateOfBirth.slice(5) : el.notificationDate.slice(5)}`,
                eventType: data.eventType,
            };
        }));
    };

    return <>
        <h3>Find events by username (full or partial):</h3>

        <form onSubmit={handleSubmit(data => formSubmitHandler(data))}>
            <FormProvider {...methods}>
                <FormInput labelName="name" inputType="text" inputName="name" isRequired/>
                <EventTypeSelect/>
            </FormProvider>
            <button type="submit">Find!</button>
        </form>

        <div>
            {
                foundEntities.map((el, i) => <EventList key={i} header={el.eventDate} entitiesList={[el]}/>)
            }
        </div>
    </>
};