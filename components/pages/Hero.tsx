import {Container, Stack, Typography, useMediaQuery} from "@mui/material";
import {Box, useTheme} from "@mui/system";
import Image from 'next/image.js'
import heroPicture from '../../public/img/hero.svg'
import {ButtonLink} from "../navigation/ButtonLink";
import {useTranslation} from "next-i18next";

const Slogan = () => {
    const theme = useTheme()
    const small = useMediaQuery(theme.breakpoints.down('md'))

    return (
        <Typography variant={'h1'} minWidth={small ? 0 : 410}>
            Biuro Rachunkowe <br/> Joanna Bączar
        </Typography>
    )
}

const Comment = () => {
    const {t} = useTranslation()

    return (
        <Typography component={'p'} variant={'subtitle1'}>
            {t("Przedsiębiorca może podejmować wszelkie działania")}
        </Typography>
    )
}

const CTA = () => {
    const {t} = useTranslation()

    return (
        <Box>
            <ButtonLink href={'/kontakt#contact-form'} variant={'contained'}>
                {t('Skontaktuj się z nami')}
            </ButtonLink>
        </Box>
    )
}

const Picture = () => {
    const {t} = useTranslation()

    return (
        <Box flexShrink={0}>
            <Image src={heroPicture} alt={t('Stanowsko pracy księgowego')}/>
        </Box>
    )
}

export const Hero = () => {
    const theme = useTheme()
    const small = useMediaQuery(theme.breakpoints.down('md'))

    return (
        <Container maxWidth={'xl'}>
            <Stack pt='150px' direction={small ? 'column' : 'row'} alignItems={'center'} gap={small ? '32px' : '0'}>
                <Stack gap={'32px'} order={2} flex={1}>
                    <Slogan/>
                    <Comment/>
                    <CTA/>
                </Stack>

                <Box order={small ? 1 : 3} flex={1}>
                    <Picture/>
                </Box>
            </Stack>
        </Container>
    )
}
