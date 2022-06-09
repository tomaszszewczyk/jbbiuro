import {Box} from "@mui/system";
import {greyBackgroundColor} from "../../theme/theme";
import {Card, Container, Stack, Typography} from "@mui/material";
import {FC, ReactNode} from "react";
import {MDXRemote, MDXRemoteSerializeResult} from "next-mdx-remote";
import {useTranslation} from "next-i18next";

export interface DateEntry {
    day: number
    content: MDXRemoteSerializeResult
}

interface ParentProps {
    children: ReactNode
}

const p: FC<ParentProps> = ({children}) =>
    <Typography variant={'body2'} component={'p'}>{children}</Typography>

const strong: FC<ParentProps> = ({children}) =>
    <strong style={{color: '#2C1F9C'}}>{children}</strong>

const li: FC<ParentProps> = ({children}) =>
    <Typography variant={'body2'} component={'li'}>{children}</Typography>

const DateCard: FC<DateEntry> = ({day, content}) => {
    const {t} = useTranslation()

    return (
        <Card sx={{maxWidth: '900px', width: '100%'}} id={day.toString()}>
            <Stack gap={'16px'} m={'32px'}>
                <Typography variant={'h3'}>{day + ' ' + t('dzień miesiąca')}</Typography>
                {/*@ts-ignore*/}
                <MDXRemote {...content} components={{p, li, strong}}/>
            </Stack>
        </Card>
    )
}

interface DatesProps {
    dates: DateEntry[]
}

export const Dates: FC<DatesProps> = ({dates}) => {
    const {t} = useTranslation()

    return (
        <Box bgcolor={greyBackgroundColor} mt={'100px'} pt={'50px'} pb={'50px'}>
            <Container maxWidth={'xl'}>
                <Typography variant={'h2'}>
                    {t("Ważne daty")}
                </Typography>
                <Typography component={'p'} variant={'subtitle1'}>
                    {t("Najważniejsze daty w miesiącu podatkowym")}
                </Typography>

                <Stack gap={'16px'} pt={'32px'} alignItems={'center'}>
                    {dates.map(d => (
                        <DateCard key={d.day} day={d.day} content={d.content}/>
                    ))}
                </Stack>
            </Container>
        </Box>
    )
}
