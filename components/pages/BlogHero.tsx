import {Container, Stack, Typography, useMediaQuery} from "@mui/material";
import {Box, useTheme} from "@mui/system";
import Image from 'next/image.js'
import blogHeroPicture from '../../public/img/blogHero.svg'

const Slogan = () => {
    return (
        <Typography variant={'h1'}>
            Aktualności
        </Typography>
    )
}

const Comment = () => {
    return (
        <Typography component={'p'} variant={'subtitle1'}>
            Przegląd najważniejszych wiadomości
        </Typography>
    )
}

const Picture = () => {
    return (
        <Box flexShrink={0}>
            <Image src={blogHeroPicture} alt={'Księgowy przy pracy'}/>
        </Box>
    )
}

export const BlogHero = () => {
    const theme = useTheme()
    const small = useMediaQuery(theme.breakpoints.down('md'))

    return (
        <Container maxWidth={'xl'}>
            <Stack pt='150px' direction={small ? 'column' : 'row'} alignItems={'center'} gap={small ? '32px' : '0'}>
                <Stack gap={'8px'} order={2} flex={2}>
                    <Slogan/>
                    <Comment/>
                </Stack>
                <Box order={small ? 1 : 3} flex={3}>
                    <Picture/>
                </Box>
            </Stack>
        </Container>
    )
}
