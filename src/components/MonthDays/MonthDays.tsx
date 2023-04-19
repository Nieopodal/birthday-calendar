import {useMonth} from "../../hooks/useMonth";

interface Props {
    givenDate: Date;
}

export const MonthDays = ({givenDate}: Props) => {

    const {daysInMonthListIncludingZeros, today} = useMonth(givenDate)

    return <>{
        daysInMonthListIncludingZeros.map((el, i) =>
            <div className={`one-day-card ${el === today ? 'today' : ''}`}
                 key={i}>
                {el > 0 ? el : ''}
            </div>
        )
    }
    </>
};