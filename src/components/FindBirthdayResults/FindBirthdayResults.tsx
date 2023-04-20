import {EventList} from "../common/EventList";
import {OneEntityIncludingEventDateAndType} from "../../types/OneEntity";
import {format} from "date-fns";
import {EventType} from "../../types/EventType";

interface Props {
    foundEntities: OneEntityIncludingEventDateAndType[] | null;
}

export const FindBirthdayResults = ({foundEntities}: Props) => {

    if (!foundEntities) return null;

    return <div>
        <p>Found {foundEntities.length} results</p>
        {
            foundEntities.map((el, i) => <EventList key={i} header={`${format(new Date(el.eventDate), "yyyy-MM-dd")}  - ${el.eventType === EventType.Birthday ? "Urodziny" : "Pamiętaj o prezencie dla:"} `} entitiesList={[el]}/>)
        }
    </div>
};