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

interface BlogProps {
    blogs: BlogEntry[]
}

const BlogPage: NextPage<BlogProps> = ({blogs}) => {
    return (
        <ThemeProvider theme={theme}>
            <HtmlHead
                title={'Biuro Rachunkowe Joanna Bączar - Aktualności'}
                description={'Przegląd najważniejszych wiadomości'}/>

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

export const getStaticProps: GetStaticProps<BlogProps> = async (context) => {
    return {props: {blogs: await getNews()}}
}

export default BlogPage