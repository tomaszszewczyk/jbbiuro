import {Container, Stack, Typography, useMediaQuery} from "@mui/material";
import {Box, useTheme} from "@mui/system";
import Image from 'next/image.js'
import blogHeroPicture from '../../public/img/blogHero.svg'

const Slogan = () => {
    return (
        <Typography variant={'h1'}>
            Skontaktuj się z nami!
        </Typography>
    )
}

export const ContactHero = () => {
    const theme = useTheme()
    const small = useMediaQuery(theme.breakpoints.down('md'))

    return (
        <Container maxWidth={'xl'}>
            <Stack pt='100px' direction={small ? 'column' : 'row'} alignItems={'center'} gap={small ? '32px' : '0'}>
                <Slogan/>
            </Stack>
        </Container>
    )
}
