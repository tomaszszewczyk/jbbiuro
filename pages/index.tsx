import type { NextPage } from 'next'
import {theme} from "../theme/theme";
import {ThemeProvider} from "@mui/material/styles";
import {HtmlHead} from "../components/meta/HtmlHead";
import {Navbar} from "../components/navigation/Navbar";
import {SkipLink} from "../components/navigation/SkipLink";
import {Hero} from "../components/pages/Hero";
import {Scope} from "../components/pages/Scope";
import {Info} from "../components/pages/Info";
import {Footer} from "../components/pages/Footer";
import {GetStaticProps} from "next";
import {getNews} from "../lib/news";
import {Blog, BlogEntry} from "../components/pages/Blog";
import {BlogSection} from "../components/pages/BlogSection";
import {CalendarSection} from "../components/pages/CalendarSection";

interface BlogProps {
    blog: BlogEntry
}

const Home: NextPage<BlogProps> = ({blog}) => {
  return (
      <ThemeProvider theme={theme}>
        <HtmlHead
            title={'Biuro Rachunkowe Joanna Bączar'}
            description={
              'Przedsiębiorca może podejmować wszelkie działania, z wyjątkiem tych, których zakazują przepisy ' +
              'prawa. Przedsiębiorca może być obowiązany do określonego zachowania tylko na podstawie ' +
              'przepisów prawa.'
            }/>

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

export const getStaticProps: GetStaticProps<BlogProps> = async (context) => {
    return {props: {blog: (await getNews())[0]}}
}

export default Home
