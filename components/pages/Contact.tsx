import {Button, Container, FormControl, Grid, Input, InputLabel, Stack, Typography} from "@mui/material";
import {Box} from "@mui/system";

const Form = () => {
    return (
        <Stack id='contact-form' gap={'32px'} component={'form'}>
            <FormControl>
                <InputLabel htmlFor="name-input" id='name-input-label'>Nazwa firmy</InputLabel>
                <Input id="name-input" aria-describedby="name-input-label"/>
            </FormControl>

            <Stack direction={'row'} gap={'32px'}>
                <FormControl sx={{flex: 2}}>
                    <InputLabel htmlFor="address-input" id='address-input-label'>Adres</InputLabel>
                    <Input id="address-input" aria-describedby="address-input-label"/>
                </FormControl>

                <FormControl sx={{flex: 1}}>
                    <InputLabel htmlFor="postal-input" id='postal-input-label'>Kod pocztowy</InputLabel>
                    <Input id="postal-input" aria-describedby="postal-input-label"/>
                </FormControl>
            </Stack>

            <FormControl>
                <InputLabel htmlFor="contact-name-input" id='contact-name-input-label'>Imię i nazwisko</InputLabel>
                <Input id="contact-name-input" aria-describedby='contact-name-input-label'/>
            </FormControl>

            <FormControl>
                <InputLabel htmlFor="phone-input" id='phone-input-label'>Telefon</InputLabel>
                <Input id="phone-input" aria-describedby='phone-input-label'/>
            </FormControl>

            <FormControl>
                <InputLabel htmlFor="email-input" id='email-input-label'>Adres email</InputLabel>
                <Input id="email-input" aria-describedby="email-input-label"/>
            </FormControl>

            <FormControl>
                <InputLabel htmlFor="message-input" id='message-input-label'>Wiadomość</InputLabel>
                <Input id="message-input" aria-describedby='message-input-label'/>
            </FormControl>

            <Button id="send-form" variant={'contained'}>Wyślij</Button>
        </Stack>
    )
}

const Data = () => {
    return (
        <Stack gap={'32px'} maxWidth={'400px'}>
            <Stack gap={'16px'}>
                <Typography component={'h2'} variant={'h5'}>Dane firmy</Typography>
                <Typography component={'p'} variant={'body1'}>
                    Biuro Rachunkowe Joanna Bączar<br/>
                    Spółka z ograniczona odpowiedzialnością
                </Typography>
                <Typography component={'p'} variant={'body1'}>
                    NIP 884274143<br/>
                    REGON 366617754<br/>
                    KRS 0000664955<br/>
                    Telefon 74/8577566<br/>
                </Typography>
                <Typography component={'p'} variant={'body1'}>
                    Ul. Armii Krajowej 29/3<br/>
                    58-100 Świdnica
                </Typography>
            </Stack>

            <Stack gap={'16px'}>
                <Typography component={'h2'} variant={'h5'}>Informacje dodatkowe</Typography>
                <Typography component={'p'} variant={'body1'}>
                    Firma posiada Certyfikat Ministerstwa Finansów numer 8015/98 oraz ubezpieczenie od
                    odpowiedzialności cywilnej
                </Typography>
            </Stack>
        </Stack>
    )
}

export const Contact = () => {
    return (
        <Box pt={'64px'}>
            <Container maxWidth={'xl'}>
                <Grid container spacing={'128px'}>
                    <Grid item sm={12} md={6}>
                        <Form/>
                    </Grid>
                    <Grid item sm={12} md={6}>
                        <Data/>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}
