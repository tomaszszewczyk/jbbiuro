import {NextPage} from "next";
import {theme} from "../theme/theme";
import {HtmlHead} from "../components/meta/HtmlHead";
import {ThemeProvider} from "@mui/material/styles";
import {SkipLink} from "../components/navigation/SkipLink";
import {Navbar} from "../components/navigation/Navbar";
import {BlogHero} from "../components/pages/BlogHero";
import {Blog, BlogEntry} from "../components/pages/Blog";
import {Footer} from "../components/pages/Footer";
import {getNews} from "../lib/news";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import {useTranslation} from "next-i18next";

interface BlogProps {
    blogs: BlogEntry[]
}

const BlogPage: NextPage<BlogProps> = ({blogs}) => {
    const {t} = useTranslation()

    return (
        <ThemeProvider theme={theme}>
            <HtmlHead
                title={t('Biuro Rachunkowe Joanna Bączar') + ' - ' + t('Aktualności')}
                description={t('Przegląd najważniejszych wiadomości')}/>

            <SkipLink/>
            <Navbar/>
            <main id={'main'}>
                <BlogHero/>
                <Blog blogs={blogs}/>
            </main>
            <Footer/>
        </ThemeProvider>
    )
}

export const getStaticProps = async ({ locale }: {locale: string}) => {
    return {
        props: {
            ...(await serverSideTranslations(locale, ['common'])),
            blogs: (await getNews(locale)),
        }
    }
}

export default BlogPage
