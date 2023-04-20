import {EventType} from "../types/EventType";

export const returnEventTextHandler = (eventType: EventType): string => (eventType === EventType.Birthday ? "Urodziny:" : "Pozostało 2 tygodnie - nie zapomnij o prezencie dla:");