import {OneEntity} from "../types/OneEntity";

interface Props {
    header: string;
    entitiesList: OneEntity[];

}

export const ModalEventList = ({header, entitiesList}: Props) => (
    <>
        <h3>{header}</h3>
        <ul>
            {entitiesList.map((el, i) =>
                <li key={i}>
                    {`${el.name} ${el.surname} - data urodzenia: ${el.dateOfBirth}, email: ${el.email}`}
                    <p><strong>Zainteresowania:</strong> {el.hobbies}</p>
                </li>)
            }
        </ul>
    </>
);