import {Box} from "@mui/system";
import {greyBackgroundColor} from "../../theme/theme";
import {Container, Stack, Typography} from "@mui/material";
import {BlogCard, BlogEntry} from "./Blog";
import {FC} from "react";
import {ButtonLink} from "../navigation/ButtonLink";

export const BlogSection: FC<BlogEntry> = ({content}) => {
    return (
        <Box bgcolor={greyBackgroundColor} mt={'100px'} pt={'50px'} pb={'50px'}>
            <Container maxWidth={'xl'}>
                <Typography variant={'h2'}>
                    Aktualności
                </Typography>
                <Typography component={'p'} variant={'subtitle1'}>
                    Przegląd najważniejszych wiadomości
                </Typography>

                <Stack gap={'32px'} pt={'32px'} alignItems={'center'}>
                    <BlogCard content={content}/>
                    <ButtonLink href={'/aktualnosci'} variant={'contained'} label={'Zobacz aktualności'}>
                        Zobacz aktualności
                    </ButtonLink>
                </Stack>
            </Container>
        </Box>
    )
}