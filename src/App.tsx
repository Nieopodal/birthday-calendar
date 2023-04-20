import React from 'react';
import {Route, Routes} from "react-router-dom";
import {Provider} from "react-redux";
import {HomeView} from "./views/HomeView/HomeView";
import {BirthdayFormView} from "./views/BirthdayFormView/BirthdayFormView";
import {CalendarView} from "./views/CalendarView/CalendarView";
import {store} from "./store";
import {AppContainer} from "./components/AppContainer/AppContainer";

export const App = () => {

    return <Provider store={store}>
        <div>
            <AppContainer>
                <Routes>
                    <Route path="/" element={<HomeView/>}/>
                    <Route path="/birthday-form" element={<BirthdayFormView/>}/>
                    <Route path="/calendar" element={<CalendarView/>}/>
                </Routes>
            </AppContainer>
        </div>
    </Provider>
};
