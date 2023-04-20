import {EventList} from "../common/EventList";
import {OneEntityIncludingEventDateAndType} from "../../types/OneEntity";
import {format} from "date-fns";

interface Props {
    foundEntities: OneEntityIncludingEventDateAndType[] | null;
}

export const FindBirthdayResults = ({foundEntities}: Props) => {

    if (!foundEntities) return null;

    return <div>
        <p>Found {foundEntities.length} results</p>
        {
            foundEntities.map((el, i) => <EventList key={i} header={format(new Date(el.eventDate), "YYYY-MM-dd")} entitiesList={[el]}/>)
        }
    </div>
};