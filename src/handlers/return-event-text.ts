import {EventType} from "../types/EventType";

export const returnEventTextHandler = (eventType: EventType): string => (eventType === EventType.Birthday ? "Birthday:" : "Remember - buy a gift for:");