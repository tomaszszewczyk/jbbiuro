import {Stack, useMediaQuery} from "@mui/material";
import {Selector} from "./MonthSelector";
import {WeekdaysRow} from "./WeekdaysRow";
import {DayMatrix} from "./CalendarMatrix";
import {createContext, useState} from "react";
import {useTheme} from "@mui/system";

interface CalendarContextInterface {
    month: number
    year: number

    next: () => void
    prev: () => void
}

//@ts-ignore
export const CalendarContext = createContext<CalendarContextInterface>({})

export const Calendar = () => {
    const theme = useTheme()
    const small = useMediaQuery(theme.breakpoints.down('md'))

    const date = new Date()
    const [[month, year], setState] = useState([date.getMonth(), date.getFullYear()])

    const next = () => setState(([m, y]) => month == 11 ? [0, y + 1] : [m + 1, y])
    const prev = () => setState(([m, y]) => month == 0 ? [11, y - 1] : [m - 1, y])

    return (
        <CalendarContext.Provider value={{month, year, next, prev}}>
            <Stack width={small ? '300px' : '500px'} gap={'32px'}>
                <Selector/>
                <WeekdaysRow/>
                <DayMatrix/>
            </Stack>
        </CalendarContext.Provider>
    )
}
