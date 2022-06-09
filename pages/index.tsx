import type {NextPage} from 'next'
import {theme} from "../theme/theme";
import {ThemeProvider} from "@mui/material/styles";
import {HtmlHead} from "../components/meta/HtmlHead";
import {Navbar} from "../components/navigation/Navbar";
import {SkipLink} from "../components/navigation/SkipLink";
import {Hero} from "../components/pages/Hero";
import {Scope} from "../components/pages/Scope";
import {Info} from "../components/pages/Info";
import {Footer} from "../components/pages/Footer";
import {getNews} from "../lib/news";
import {BlogEntry} from "../components/pages/Blog";
import {BlogSection} from "../components/pages/BlogSection";
import {CalendarSection} from "../components/pages/CalendarSection";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import {useTranslation} from "next-i18next";

interface BlogProps {
    blog: BlogEntry
}

const Home: NextPage<BlogProps> = ({blog}) => {
    const {t} = useTranslation()

    return (
        <ThemeProvider theme={theme}>
            <HtmlHead
                title={t('Biuro Rachunkowe Joanna Bączar')}
                description={t('Przedsiębiorca może podejmować wszelkie działania')}/>

            <SkipLink/>
            <Navbar/>
            <main id={'main'}>
                <Hero/>
                <Info/>
                <Scope/>
                <BlogSection content={blog.content}/>
                <CalendarSection/>
            </main>
            <Footer/>
        </ThemeProvider>
    )
}

export const getStaticProps = async ({ locale }: {locale: string}) => {
    return {
        props: {
            ...(await serverSideTranslations(locale, ['common'])),
            blog: (await getNews())[0],
        }
    }
}

export default Home
