import {FormProvider, useForm} from "react-hook-form";
import React, {useEffect} from "react";
import {FormInput} from "../components/common/FormInput";
import {useDispatch, useSelector} from "react-redux";
import {setBirthday, setFromLocalStorage} from "../features/birthday/birthday-slice";
import {RootState} from "../store";

interface InputsFormData {
    name: string;
    surname: string;
    email: string;
    dateOfBirth: string;
    hobbies: string;
}

export const BirthdayFormView = () => {

    const dispatch = useDispatch();
    // const {first, second} = useSelector((state: RootState) => state.birthday);

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

    const {birthday: birthdayFromState} = useSelector((state: RootState) => state.birthday);

    useEffect(() => {
        if (birthdayFromState.length > 1) {
            return;
        }
        else if (birthdayFromState.length === 0) {
            console.log('stan pusty, sprawdzam localstorage');
            const birthdayList = localStorage.getItem("birthdayList");
            if (birthdayList) {
                const data = birthdayList.length > 0 ? JSON.parse(localStorage.getItem("birthdayList") as string) : null;

                if (data) {
                    console.log('znalazłem localstorage, zapisuję do stanu!');
                    dispatch(setFromLocalStorage(data));
                    return
                }
            }
        }
    }, [dispatch, birthdayFromState]);


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