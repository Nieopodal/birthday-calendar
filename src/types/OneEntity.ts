import {EventType} from "./EventType";

export interface OneEntity {
    name: string;
    surname: string;
    email: string;
    dateOfBirth: string;
    notificationDate: string;
    hobbies: string;
}

export interface OneEntityIncludingEventDateAndType extends OneEntity {
    eventDate: Date;
    eventType: EventType;
}