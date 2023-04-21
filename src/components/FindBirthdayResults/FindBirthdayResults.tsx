import {format} from "date-fns";
import {EventList} from "../common/EventList/EventList";
import {OneEntityIncludingEventDateAndType} from "../../types/OneEntity";
import {returnEventTextHandler} from "../../handlers/return-event-text";

import styles from "./FindBirthdayResults.module.scss";

interface Props {
    foundEntities: OneEntityIncludingEventDateAndType[] | null;
}

export const FindBirthdayResults = ({foundEntities}: Props) => {

    if (!foundEntities) return null;

    return <div className={styles.results}>
        <div>Znalezionych wyników: {foundEntities.length}</div>
        {
            foundEntities.map((el, i) =>
                <EventList key={i}
                           header={`${format(new Date(el.eventDate), "yyyy-MM-dd")} - ${returnEventTextHandler(el.eventType)}`}
                           entitiesList={[el]}
                />
            )
        }
    </div>
};