import {EventList} from "../common/EventList/EventList";
import {OneEntityIncludingEventDateAndType} from "../../types/OneEntity";
import {format} from "date-fns";
import {EventType} from "../../types/EventType";

interface Props {
    foundEntities: OneEntityIncludingEventDateAndType[] | null;
}

export const FindBirthdayResults = ({foundEntities}: Props) => {

    if (!foundEntities) return null;

    return <div>
        <div>Found {foundEntities.length} result(s)</div>
        {
            foundEntities.map((el, i) => <EventList key={i} header={`${format(new Date(el.eventDate), "yyyy-MM-dd")}  - ${el.eventType === EventType.Birthday ? "Birthday" : "Remember - buy a git for:"} `} entitiesList={[el]}/>)
        }
    </div>
};