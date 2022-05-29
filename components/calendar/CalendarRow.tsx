import {FC, useContext} from "react";
import {Stack} from "@mui/material";
import _ from "lodash";
import {DayButton} from "./DayButton";
import {getStartingDay} from "./logic";
import {CalendarContext} from "./Calendar";

interface CalendarRowProps {
    row: number
}

export const CalendarRow: FC<CalendarRowProps> = ({row}) => {
    const {year, month} = useContext(CalendarContext)

    return (
        <Stack direction={'row'} justifyContent={'space-around'}>
            {_.range(7).map((d: number) => (
                <DayButton key={d} date={row * 7 + d - getStartingDay(year, month) + 1}/>
            ))}
        </Stack>
    )
}