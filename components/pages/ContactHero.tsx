import {Container, Stack, Typography, useMediaQuery} from "@mui/material";
import {Box, useTheme} from "@mui/system";
import Image from 'next/image.js'
import blogHeroPicture from '../../public/img/blogHero.svg'
import {useTranslation} from "next-i18next";

const Slogan = () => {
    const {t} = useTranslation()

    return (
        <Typography variant={'h1'}>
            {t("Logowanie do panelu klienta")}
        </Typography>
    )
}

export const ContactHero = () => {
    return (
        <Container maxWidth={'xl'}>
            <Stack pt='100px' alignItems={'center'}>
                <Slogan/>
            </Stack>
        </Container>
    )
}
