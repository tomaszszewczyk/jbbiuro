import {Box, Container, Grid, Stack, Typography} from "@mui/material";
import {footerTheme, primaryColor} from "../../theme/theme";
import {ThemeProvider} from "@mui/material/styles";
import {ImageLink} from "../navigation/ImageLink";
import logo from '../../public/img/logo_white.svg'
import {useTranslation} from "next-i18next";

const Contents = () => {
    const {t} = useTranslation()

    return (
        <Stack gap={'64px'}>
            <Grid container columns={12} spacing={'32px'}>
                <Grid item lg={4} md={12} sm={12}>
                    <Stack>
                        <Typography component={'h3'} variant={'h5'}>Biuro Rachunkowe Joanna Bączar</Typography>
                        <Typography>Spółka z ograniczoną odpowiedzialnością</Typography>
                    </Stack>
                </Grid>
                <Grid item lg={2} md={3} sm={6}>
                    <Typography component={'h3'} variant={'h5'}>NIP</Typography>
                    <Typography>884274143</Typography>
                </Grid>
                <Grid item lg={2} md={3} sm={6}>
                    <Typography component={'h3'} variant={'h5'}>REGON</Typography>
                    <Typography>366617754</Typography>
                </Grid>
                <Grid item lg={2} md={3} sm={6}>
                    <Typography component={'h3'} variant={'h5'}>KRS</Typography>
                    <Typography>0000664955</Typography>
                </Grid>
                <Grid item lg={2} md={3} sm={6}>
                    <Typography component={'h3'} variant={'h5'}>{t("Telefon")}</Typography>
                    <Typography>74/8577566</Typography>
                </Grid>
            </Grid>

            <Grid container justifyContent={'center'} spacing={'8px'}>
                <Grid item>
                    <Typography sx={{textAlign: 'center'}}>
                        {t("Zaprojektowane i wdrożone przez")}
                    </Typography>
                </Grid>
                <Grid item>
                    <ImageLink label={t('Przejdź na stronę bluesBrackets')} src={logo} alt={'Blues Brackets logo'}
                               url={'https://bluesbrackets.com'}/>
                </Grid>
            </Grid>
        </Stack>
    )
}

export const Footer = () => {
    return (
        <Box bgcolor={primaryColor}>
            <Container maxWidth={'xl'} sx={{mt: '100px', pt: '100px', pb: '64px'}}>
                <ThemeProvider theme={footerTheme}>
                    <Contents/>
                </ThemeProvider>
            </Container>
        </Box>
    )
}
