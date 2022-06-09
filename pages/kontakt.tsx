import {NextPage} from "next";
import {theme} from "../theme/theme";
import {HtmlHead} from "../components/meta/HtmlHead";
import {SkipLink} from "../components/navigation/SkipLink";
import {Navbar} from "../components/navigation/Navbar";
import {ThemeProvider} from "@mui/material/styles";
import {ContactHero} from "../components/pages/ContactHero";
import {Contact} from "../components/pages/Contact";
import {Footer} from "../components/pages/Footer";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import {useTranslation} from "next-i18next";

const ContactPage: NextPage = () => {
    const {t} = useTranslation()

    return (
        <ThemeProvider theme={theme}>
            <HtmlHead
                title={t('Biuro Rachunkowe Joanna Bączar') + ' - ' + t('Kontakt')}
                description={t('Skontaktuj się z nami')}/>
            <SkipLink/>
            <Navbar/>
            <main id={'main'}>
                <ContactHero/>
                <Contact/>
                <iframe
                    title={t('Podgląd adresu w mapach Google Maps')}
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2519.525615108651!2d16.4741051!3d50.8399503!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470e4d45860dfb91%3A0x3efe009ebaa7b91d!2sArmii%20Krajowej%2029%2C%2058-100%20%C5%9Awidnica!5e0!3m2!1spl!2spl!4v1653773976284!5m2!1spl!2spl"
                    loading="lazy"
                    style={{height: '500px', width: '100%', border: 'none', paddingTop: '100px'}}
                    referrerPolicy="no-referrer-when-downgrade"
                />
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

export default ContactPage
