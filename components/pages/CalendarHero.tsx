import {Container, Stack, Typography, useMediaQuery} from "@mui/material";
import {Box, useTheme} from "@mui/system";
import {Calendar} from "../calendar/Calendar";

const Slogan = () => {
    return (
        <Typography variant={'h1'}>
            Kalendarz
        </Typography>
    )
}

const Comment = () => {
    return (
        <Typography component={'p'} variant={'subtitle1'}>
            Przegląd ważnych dat w rachunkowości
        </Typography>
    )
}

export const CalendarHero = () => {
    const theme = useTheme()
    const small = useMediaQuery(theme.breakpoints.down('lg'))

    return (
        <Container maxWidth={'xl'}>
            <Stack pt={small ? '50px' : '150px'}
                   direction={small ? 'column' : 'row'}
                   alignItems={'center'}
                   gap={small ? '100px' : '0'}
            >
                <Stack gap={'8px'} order={2} flex={1} alignSelf={small ? 'flex-start' : 'center'}>
                    <Slogan/>
                    <Comment/>
                </Stack>

                <Box order={small ? 1 : 3} flex={1}>
                    <Calendar/>
                </Box>
            </Stack>
        </Container>
    )
}
