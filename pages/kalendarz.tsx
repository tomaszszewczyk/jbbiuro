import {GetStaticProps, NextPage} from "next";
import {theme} from "../theme/theme";
import {HtmlHead} from "../components/meta/HtmlHead";
import {ThemeProvider} from "@mui/material/styles";
import {SkipLink} from "../components/navigation/SkipLink";
import {Navbar} from "../components/navigation/Navbar";
import {CalendarHero} from "../components/pages/CalendarHero";
import {DateEntry, Dates} from "../components/pages/Dates";
import {Footer} from "../components/pages/Footer";
import {getDates} from "../lib/dates";

interface DatesProps {
    dates: DateEntry[]
}

const Kalendarz: NextPage<DatesProps> = ({dates}) => {
    return (
        <ThemeProvider theme={theme}>
            <HtmlHead
                title={'Biuro Rachunkowe Joanna Bączar - Kalendarz'}
                description={'Przegląd ważnych dat w rachunkowości'}/>

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

export const getStaticProps: GetStaticProps<DatesProps> = async (context) => {
    return {props: {dates: await getDates()}}
}

export default Kalendarz
