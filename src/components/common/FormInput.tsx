import React from "react";
import {useFormContext} from "react-hook-form";

interface Props {
    labelName: string;
    inputType: string;
    inputName: string;
}

export const FormInput  = ({labelName, inputType, inputName}: Props) => {
    const { register } = useFormContext()

    return <label>
        {labelName}:
        <input
            type={inputType}
            {...register(inputName)}
            required
        />
    </label>
};