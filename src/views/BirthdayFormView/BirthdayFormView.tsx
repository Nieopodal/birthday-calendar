import React from "react";
import {FormProvider, useForm} from "react-hook-form";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {format, subDays} from 'date-fns';
import {FormInput} from "../../components/common/FormInput/FormInput";
import {setBirthday} from "../../features/birthday/birthday-slice";
import {useLocalStorage} from "../../hooks/useLocalStorage";

import styles from "./BirthdayFormView.module.scss";

interface InputsFormData {
    name: string;
    surname: string;
    email: string;
    dateOfBirth: string;
    hobbies: string;
}

export const BirthdayFormView = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {birthdayListFromState} = useLocalStorage();

    const methods = useForm<InputsFormData>({
        defaultValues: {
            name: '',
            surname: '',
            email: '',
            dateOfBirth: '',
            hobbies: '',
        },
    });

    const {handleSubmit} = methods;

    const formSubmitHandler = (data: InputsFormData) => {
        const notification = subDays(new Date(data.dateOfBirth), 14);
        const notificationFormatted = format(notification, 'yyyy-MM-dd');
        const fullBirthdayData = {
            ...data,
            notificationDate: notificationFormatted,
        };
        localStorage.setItem(
            'birthdayList',
            JSON.stringify([...birthdayListFromState, fullBirthdayData]),
        );
        dispatch(setBirthday(fullBirthdayData));
        navigate('/calendar', {replace: true});
    };

    return <>
        <header>
            <h1 className={styles.h1}>Formularz urodzinowy</h1>
        </header>
        <form
            className={styles.form}
            onSubmit={handleSubmit(data => formSubmitHandler(data))}
        >
            <FormProvider {...methods}>
                <FormInput labelName="Imię" inputType="text" inputName="name" isRequired/>
                <FormInput labelName="Nazwisko" inputType="text" inputName="surname" isRequired/>
                <FormInput labelName="Email" inputType="email" inputName="email" isRequired/>
                <FormInput labelName="Data urodzenia" inputType="date" inputName="dateOfBirth" isRequired/>
                <FormInput labelName="Zainteresowania" inputType="text" inputName="hobbies" isRequired/>
                <div className={styles.form_action}>
                    <button type="submit">Zapisz</button>
                </div>
            </FormProvider>
        </form>
    </>
};