import {Box, Container, Grid, Stack, Typography, useMediaQuery} from "@mui/material";
import {Calendar} from "../calendar/Calendar";
import {ButtonLink} from "../navigation/ButtonLink";
import {useTheme} from "@mui/system";

const Header = () => {
    const theme = useTheme()
    const small = useMediaQuery(theme.breakpoints.down('lg'))

    return (
        <>
            <Typography variant={'h2'}>
                Kalendarz
            </Typography>
            <Typography component={'p'} variant={'subtitle1'} pb={'16px'}>
                Najważniejsze daty w rachunkowości
            </Typography>
            {!small && <ButtonLink href={'/kalendarz'} variant={'contained'}>
                Zobacz daty
            </ButtonLink>}
        </>
    )
}

export const CalendarSection = () => {
    const theme = useTheme()
    const small = useMediaQuery(theme.breakpoints.down('lg'))

    return (
        <Box mt={'100px'} pt={'50px'} pb={'50px'}>
            <Container maxWidth={'xl'}>
                <Grid container alignItems={'center'} justifyContent={'space-between'} spacing={'32px'}>
                    <Grid item lg={4} sm={12}>
                        <Header/>
                    </Grid>
                    <Grid item lg={8} sm={12}>
                        <Stack direction={'column'} alignItems={'center'} spacing={'64px'}>
                            <Calendar/>

                            {small && <ButtonLink href={'/kalendarz'} variant={'contained'} label={'Zobacz kalendarz'}>
                                Zobacz daty
                            </ButtonLink>}
                        </Stack>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}