import {FC, useContext} from "react";
import {Button, Stack, Typography, useMediaQuery} from "@mui/material";
import {getDaysInMonth, importantDays} from "./logic";
import {CalendarContext} from "./Calendar";
import {useTheme} from "@mui/system";

interface DayButtonProps {
    date: number
}

export const DayButton: FC<DayButtonProps> = ({date}) => {
    const theme = useTheme()

    const {year, month} = useContext(CalendarContext)
    const inMonth = date > 0 && date <= getDaysInMonth(year, month)
    const actual = new Date(year, month, date).getDate()
    const enabled = !!importantDays.find(i => i === actual)

    return (
        <Stack width={'32px'} alignItems={'center'}>
            <Button size={'small'}
                    variant={enabled ? 'outlined' : 'text'}
                    disabled={!enabled}
                    href={'/kalendarz#' + actual}
                    sx={{
                        minWidth: 'unset !important',
                        width: '32px'
                    }}
            >
                <Typography sx={{color: inMonth ? 'black' : "#6C7470"}}>
                    {actual}
                </Typography>
            </Button>
        </Stack>
    )
}
