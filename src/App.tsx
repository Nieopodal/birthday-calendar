import React from 'react';
import './App.css';
import {Route, Routes} from "react-router-dom";
import {HomeView} from "./views/HomeView";
import {BirthdayFormView} from "./views/BirthdayFormView";
import {CalendarView} from "./views/CalendarView";
import {Provider} from "react-redux";
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
