import React from "react";
import {FormProvider, useForm} from "react-hook-form";
import {FormInput} from "../components/common/FormInput";
import {useDispatch} from "react-redux";
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
    useLocalStorage();

    const handleDispatch = (inputsFormData: InputsFormData) => {
        dispatch(setBirthday(inputsFormData));
    };

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
                console.log(data);
                handleDispatch(data);
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