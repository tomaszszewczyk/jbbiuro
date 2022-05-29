import {ButtonLink, ButtonLinkProps} from "./ButtonLink";
import {FC, useState} from "react";
import {Button, Container, Stack, useMediaQuery} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import {Box, useTheme} from "@mui/system";
import {ImageLink} from "./ImageLink";
import logo from "../../public/img/logo.png";

interface NavigationProps {
    links: ButtonLinkProps[]
}

const RegularMenu: FC<NavigationProps> = ({links}) => {
    return (
        <Stack component={'nav'} direction={'row'} gap={'64px'}>
            {links.map((l, i) => (
                <ButtonLink key={i} href={l.href} variant={l.variant}>{l.children}</ButtonLink>
            ))}
        </Stack>
    )
}

const MobileMenu: FC<NavigationProps> = ({links}) => {
    const [opened, setOpened] = useState(false)
    const theme = useTheme()

    return (
        <>
            <Stack component={'nav'} direction={'row'} gap={'64px'}>
                <Button aria-label={'Close popup menu'} onClick={() => setOpened(true)}>
                    <MenuIcon/>
                </Button>
            </Stack>

            {opened &&
            <Container sx={{
                position: 'fixed',
                width: '100%',
                height: '100%',
                left: 0,
                top: 0,
                backgroundColor: theme.palette.background.default,
                zIndex: 100,
            }}>
                <Stack justifyContent={"space-between"} height={'100%'}>
                    <Stack direction={'row'} justifyContent={'space-between'} pt={'32px'} pb={'32px'}>
                        <Box maxWidth={'196px'}>
                            <ImageLink label={'Przejdź na stronę główną'}
                                       src={logo}
                                       alt={'Logo Biuro Rachunkowe Joanna Bączar'}
                                       url={'/'}/>
                        </Box>
                        <Button onClick={() => setOpened(false)}>
                            <CloseIcon/>
                        </Button>
                    </Stack>

                    <Stack component={'nav'} direction={'column'} gap={'64px'} justifyContent={"center"}>
                        {links.map((l, i) => (
                            <ButtonLink key={i} href={l.href} variant={l.variant}>{l.children}</ButtonLink>
                        ))}
                    </Stack>

                    <Box pb={'32px'}/>
                </Stack>
            </Container>
            }
        </>
    )
}

export const Navigation: FC<NavigationProps> = ({links}) => {
    const theme = useTheme()
    const small = useMediaQuery(theme.breakpoints.down('md'))

    return small ? <MobileMenu links={links}/> : <RegularMenu links={links}/>
}
