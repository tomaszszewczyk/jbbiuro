import {Container, Stack, Typography, useMediaQuery} from "@mui/material";
import {Box, useTheme} from "@mui/system";
import Image from 'next/image.js'
import blogHeroPicture from '../../public/img/blogHero.svg'
import {useTranslation} from "next-i18next";

const Slogan = () => {
    const {t} = useTranslation()

    return (
        <Typography variant={'h1'}>
            {t("Aktualności")}
        </Typography>
    )
}

const Comment = () => {
    const {t} = useTranslation()

    return (
        <Typography component={'p'} variant={'subtitle1'}>
            {t("Przegląd najważniejszych wiadomości")}
        </Typography>
    )
}

const Picture = () => {
    const {t} = useTranslation()

    return (
        <Box flexShrink={0}>
            <Image src={blogHeroPicture} alt={t('Księgowy przy pracy')}/>
        </Box>
    )
}

export const BlogHero = () => {
    const theme = useTheme()
    const small = useMediaQuery(theme.breakpoints.down('md'))

    return (
        <Container maxWidth={'xl'}>
            <Stack pt='100px' direction={small ? 'column' : 'row'} alignItems={'center'} gap={small ? '32px' : '0'}>
                <Stack gap={'8px'} order={2} flex={1}>
                    <Slogan/>
                    <Comment/>
                </Stack>
                <Box order={small ? 1 : 3} flex={1}>
                    <Picture/>
                </Box>
            </Stack>
        </Container>
    )
}
