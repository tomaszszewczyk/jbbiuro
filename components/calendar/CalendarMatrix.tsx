import {Stack} from "@mui/material";
import _ from "lodash";
import {getDaysInMonth, getStartingDay} from "./logic";
import {CalendarRow} from "./CalendarRow";
import {useContext} from "react";
import {CalendarContext} from "./Calendar";

export const DayMatrix = () => {
    const {year, month} = useContext(CalendarContext)
    const rows = (getStartingDay(year, month) + getDaysInMonth(year, month)) / 7

    return (
        <Stack gap={'12px'}>
            {_.range(rows).map((r: number) =>
                <CalendarRow key={r} row={r}/>
            )}
        </Stack>
    )
}