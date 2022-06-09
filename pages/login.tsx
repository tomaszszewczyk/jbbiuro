import {GetStaticProps, NextPage} from "next";
import {theme} from "../theme/theme";
import {HtmlHead} from "../components/meta/HtmlHead";
import {ThemeProvider} from "@mui/material/styles";
import {SkipLink} from "../components/navigation/SkipLink";
import {Navbar} from "../components/navigation/Navbar";
import {BlogHero} from "../components/pages/BlogHero";
import {Blog, BlogEntry} from "../components/pages/Blog";
import {Footer} from "../components/pages/Footer";
import {getNews} from "../lib/news";
import {ContactHero} from "../components/pages/ContactHero";
import {Alert, Button, FormControl, Input, InputLabel, Snackbar, Stack, Typography} from "@mui/material";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import {useTranslation} from "next-i18next";
import {useState} from "react";
import {set} from "lodash";


const LoginForm = () => {
    const {t} = useTranslation()
    const [clicked, setClicked] = useState(false)

    return (
        <Stack id='contact-form' gap={'32px'} component={'form'} width={'400px'}>
            <FormControl>
                <InputLabel htmlFor="name-input" id='name-input-label'>{t('Login')}</InputLabel>
                <Input id="name-input" aria-describedby="name-input-label"/>
            </FormControl>

            <FormControl>
                <InputLabel htmlFor="message-input" id='message-input-label'>{t('Hasło')}</InputLabel>
                <Input id="message-input" aria-describedby='message-input-label'/>
            </FormControl>

            {clicked && <Alert severity="error">{t("Nieprawidłowy login lub hasło")}</Alert> }

            <Button id="send-form" variant={'contained'} onClick={() => setClicked(true)}>{t('Zaloguj')}</Button>
        </Stack>
    )
}


const LoginPage: NextPage = () => {
    const {t} = useTranslation()

    return (
        <ThemeProvider theme={theme}>
            <HtmlHead
                title={t('Biuro Rachunkowe Joanna Bączar') + ' - ' + t('Panel klienta')}
                description={t('Logowanie do panelu klienta')}/>
            <SkipLink/>
            <Navbar/>
            <main id={'main'}>
                <ContactHero/>
                <Stack pt='200px' pb={'200px'} alignItems={'center'}>
                    <LoginForm/>
                </Stack>
            </main>
            <Footer/>
        </ThemeProvider>
    )
}

export const getStaticProps = async ({ locale }: {locale: string}) => {
    return {
        props: {
            ...(await serverSideTranslations(locale, ['common'])),
        }
    }
}

export default LoginPage
