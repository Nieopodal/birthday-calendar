import React from "react";
import {FormProvider, useForm} from "react-hook-form";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {format, subDays} from 'date-fns';
import {FormInput} from "../components/common/FormInput";
import {setBirthday} from "../features/birthday/birthday-slice";
import {useLocalStorage} from "../hooks/useLocalStorage";

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
    useLocalStorage();

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

    return <>
        <h1>Birthday form</h1>
        <main>
            <form onSubmit={handleSubmit(data => {

                const notification = subDays(new Date(data.dateOfBirth), 14);
                const notificationFormatted = format(notification, 'yyyy-MM-dd');
                const fullBirthdayData = {
                    ...data,
                    notificationDate: notificationFormatted,
                };

                dispatch(setBirthday(fullBirthdayData));
                navigate('/calendar', {replace: true});
            })}>
                <FormProvider {...methods}>
                    <FormInput labelName="Name" inputType="text" inputName="name"/>
                    <FormInput labelName="Surname" inputType="text" inputName="surname"/>
                    <FormInput labelName="E-mail" inputType="email" inputName="email"/>
                    <FormInput labelName="Date of birth" inputType="date" inputName="dateOfBirth"/>
                    <FormInput labelName="Hobbies" inputType="text" inputName="hobbies"/>
                    <button type="submit">Save</button>
                </FormProvider>
            </form>
        </main>
    </>
};