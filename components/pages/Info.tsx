import {Box, Card, Container, Grid, Stack, Typography} from "@mui/material";
import Image from 'next/image'
import iconStar from '../../public/img/icon-star.svg'
import iconState from '../../public/img/icon-state.svg'
import iconChart from '../../public/img/icon-chart.svg'
import iconMoney from '../../public/img/icon-money.svg'
import {FC} from "react";
import {greyBackgroundColor} from "../../theme/theme";
import {useTranslation} from "next-i18next";

interface InfoCardProps {
    icon: any
    iconAlt: string
    title: string
    text: string
}

const InfoCard: FC<InfoCardProps> = ({icon, iconAlt, title, text}) => {
    return (
            <Card sx={{height: '100%'}}>
                <Stack gap={'16px'} m={'32px'}>
                    <Stack direction={'row'} alignItems={'center'} gap={'16px'}>
                        <Image src={icon} alt={iconAlt}/>
                        <Typography variant={'h4'} component={'h3'}>{title}</Typography>
                    </Stack>
                    <Typography variant={'body1'}>{text}</Typography>
                </Stack>
            </Card>
    )
}

export const Info = () => {
    const {t} = useTranslation()

    return (
        <Box mt={'100px'} pt={'50px'} pb={'50px'} bgcolor={greyBackgroundColor}>
            <Container maxWidth={'xl'}>
                <Typography variant={'h2'}>
                    {t("Informacje o nas")}
                </Typography>
                <Typography component={'p'} variant={'subtitle1'}>
                    {t("Przekonaj się, czym wyróżniamy się na tle konkurencji")}
                </Typography>

                <Stack alignItems={'center'}>
                    <Grid container spacing={'32px'} pt={'48px'} justifyContent={'center'} maxWidth={'900px'}>
                        <Grid item sm={12} md={6}>
                            <InfoCard icon={iconStar}
                                      iconAlt={t('Certyfikat')}
                                      title={t('Certyfikacja')}
                                      text={t('Posiadamy Certyfikat Ministerstwa Finansów numer 8015/98')}/>
                        </Grid>
                        <Grid item sm={12} md={6}>
                            <InfoCard icon={iconMoney}
                                      iconAlt={t('Ubezpieczenie')}
                                      title={t('Pełne ubezpieczenie')}
                                      text={t('Jako biuro rachunkowe ponosimy pełną odpowiedzialność')}/>
                        </Grid>
                        <Grid item sm={12} md={6}>
                            <InfoCard icon={iconChart}
                                      iconAlt={t('Komputer z wykresem')}
                                      title={t('Najlepsze oprogramowanie')}
                                      text={t('Korzystamy z systemu Comarch ERP Optima')}/>
                        </Grid>
                        <Grid item sm={12} md={6}>
                            <InfoCard icon={iconState}
                                      iconAlt={t('Profesjonalizm')}
                                      title={t('Udokumentowany profesjonalizm')}
                                      text={t('Każdy z pracowników naszego biura posiada wieloletnie doświadczenie')}/>
                        </Grid>
                    </Grid>
                </Stack>
            </Container>
        </Box>
    )
}
