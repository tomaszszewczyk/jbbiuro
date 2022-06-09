import {Stack} from "@mui/material";
import {ImageLink} from "./ImageLink";
import logo from "../../public/img/logo.png";
import {Navigation} from "./Navigation";
import {Container} from "@mui/material";
import {Box} from "@mui/system";
import {useTranslation} from "next-i18next";

export const Navbar = () => {
    const {t} = useTranslation()

    return (
        <Box>
            <Container maxWidth={'xl'}>
                <Stack direction={'row'} justifyContent={'space-between'} pt={'32px'} pb={'32px'} alignItems={'center'}>
                    <Box maxWidth={'196px'}>
                        <ImageLink label={t('Przejdź na stronę główną')}
                                   src={logo}
                                   alt={t('Logo Biuro Rachunkowe Joanna Bączar')}
                                   url={'/'}/>
                    </Box>
                    <Navigation links={[
                        {href: '/login', children: t('Panel klienta'), label: t('Zaloguj się do panelu klienta')},
                        {href: '/aktualnosci', children: t('Aktualności'), label: t('Zobacz aktualności')},
                        {href: '/kalendarz', children: t('Kalendarz'), label: t('Zobacz kalendarz')},
                        {href: '/kontakt', children: t('Kontakt'), variant: 'contained'},
                    ]}/>
                </Stack>
            </Container>
        </Box>
    )
}
