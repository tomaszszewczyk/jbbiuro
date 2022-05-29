import {Stack} from "@mui/material";
import {ImageLink} from "./ImageLink";
import logo from "../../public/img/logo.png";
import {Navigation} from "./Navigation";
import {Container} from "@mui/material";
import {Box} from "@mui/system";

export const Navbar = () => {
    return (
        <Box>
            <Container maxWidth={'xl'}>
                <Stack direction={'row'} justifyContent={'space-between'} pt={'32px'} pb={'32px'} alignItems={'center'}>
                    <Box maxWidth={'196px'}>
                        <ImageLink label={'Przejdź na stronę główną'}
                                   src={logo}
                                   alt={'Logo Biuro Rachunkowe Joanna Bączar'}
                                   url={'/'}/>
                    </Box>
                    <Navigation links={[
                        {href: '/aktualnosci', children: 'Aktualności', label: 'Zobacz aktualności'},
                        {href: '/kalendarz', children: 'Kalendarz', label: 'Zobacz kalendarz'},
                        {href: '/kontakt', children: 'Kontakt', variant: 'contained'},
                    ]}/>
                </Stack>
            </Container>
        </Box>
    )
}
