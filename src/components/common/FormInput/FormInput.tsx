import React from "react";
import {useFormContext} from "react-hook-form";

import styles from './FormInput.module.scss';

interface Props {
    labelName: string;
    inputType: string;
    inputName: string;
    isRequired?: boolean;
}

export const FormInput  = ({labelName, inputType, inputName, isRequired}: Props) => {
    const { register } = useFormContext()

    return <div className={styles.container}>
        <label className={styles.label}>
        {labelName}:
        <input
            type={inputType}
            {...register(inputName)}
            required={isRequired}
        />
    </label>
    </div>
};