import {EventList} from "../common/EventList";
import {OneEntityIncludingEventDateAndType} from "../../types/OneEntity";

interface Props {
    foundEntities: OneEntityIncludingEventDateAndType[] | null;
}

export const FindBirthdayResults = ({foundEntities}: Props) => {

    if (!foundEntities) return null;

    return <div>
        <p>Found {foundEntities.length} results</p>
        {
            foundEntities.map((el, i) => <EventList key={i} header={el.eventDate} entitiesList={[el]}/>)
        }
    </div>
};