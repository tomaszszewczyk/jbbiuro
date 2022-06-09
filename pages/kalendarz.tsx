import {NextPage} from "next";
import {theme} from "../theme/theme";
import {HtmlHead} from "../components/meta/HtmlHead";
import {ThemeProvider} from "@mui/material/styles";
import {SkipLink} from "../components/navigation/SkipLink";
import {Navbar} from "../components/navigation/Navbar";
import {CalendarHero} from "../components/pages/CalendarHero";
import {DateEntry, Dates} from "../components/pages/Dates";
import {Footer} from "../components/pages/Footer";
import {getDates} from "../lib/dates";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import {useTranslation} from "next-i18next";

interface DatesProps {
    dates: DateEntry[]
}

const Kalendarz: NextPage<DatesProps> = ({dates}) => {
    const {t} = useTranslation()

    return (
        <ThemeProvider theme={theme}>
            <HtmlHead
                title={t('Biuro Rachunkowe Joanna Bączar') + ' - ' + t('Kalendarz')}
                description={t('Przegląd ważnych dat w rachunkowości')}/>

            <SkipLink/>
            <Navbar/>
            <main id={'main'}>
                <CalendarHero/>
                <Dates dates={dates}/>
            </main>
            <Footer/>
        </ThemeProvider>
    )
}

export const getStaticProps = async ({ locale }: {locale: string}) => {
    return {
        props: {
            ...(await serverSideTranslations(locale, ['common'])),
            dates: await getDates(locale),
        }
    }
}

export default Kalendarz
