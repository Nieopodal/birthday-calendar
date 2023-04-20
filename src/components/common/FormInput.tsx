import React from "react";
import {useFormContext} from "react-hook-form";

interface Props {
    labelName: string;
    inputType: string;
    inputName: string;
    isRequired?: boolean;
}

export const FormInput  = ({labelName, inputType, inputName, isRequired}: Props) => {
    const { register } = useFormContext()

    return <label>
        {labelName}:
        <input
            type={inputType}
            {...register(inputName)}
            required={isRequired}
        />
    </label>
};