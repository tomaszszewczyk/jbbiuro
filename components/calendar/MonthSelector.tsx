import {useContext} from "react";
import {Button, Stack, Typography, useMediaQuery} from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import {months} from "./logic";
import {CalendarContext} from "./Calendar";
import {useTheme} from "@mui/system";
import {useTranslation} from "next-i18next";

export const Selector = () => {
    const theme = useTheme()
    const small = useMediaQuery(theme.breakpoints.down('md'))
    const {month, year, next, prev} = useContext(CalendarContext)
    const {t} = useTranslation()

    return (
        <Stack direction={'row'}
               alignItems={'center'}
               justifyContent={'space-between'}
               pl={small ? '8px' : '64px'}
               pr={small ? '8px' : '64px'} >
            <Button onClick={prev} aria-label={t('Poprzedni miesiąc')}>
                <ArrowBackIosNewIcon fontSize={'small'}/>
            </Button>
            <Typography>
                {t(months[month]) + ' ' + year}
            </Typography>
            <Button onClick={next} aria-label={t('Następny miesiąc')}>
                <ArrowForwardIosIcon fontSize={'small'}/>
            </Button>
        </Stack>
    )
}
