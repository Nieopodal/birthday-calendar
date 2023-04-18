import {createSlice} from "@reduxjs/toolkit";

interface OneEntity {
    name: string;
    surname: string;
    email: string;
    dateOfBirth: string;
    hobbies: string;
}

interface SetBirthday {
    payload: OneEntity;
}

interface SetFromLocalStorage {
    payload: OneEntity[];
}

type BirthdayState = {
    birthday: OneEntity[],
};

const initialState: BirthdayState = {
    birthday: [],
};

export const birthdaySlice = createSlice({
    name: 'birthday',
    initialState: initialState,
    reducers: {
        setBirthday: (state, action: SetBirthday) => {
            state.birthday.push(action.payload);
            localStorage.setItem(
                'birthdayList',
                JSON.stringify(state.birthday),
            );
        },
        setFromLocalStorage: (state, action: SetFromLocalStorage) => {
          state.birthday = action.payload;
        },
    },
});

export const {setBirthday, setFromLocalStorage} = birthdaySlice.actions;