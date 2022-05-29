import {Box, Card, Container, Grid, Stack, Typography} from "@mui/material";
import Image from 'next/image'
import iconStar from '../../public/img/icon-star.svg'
import iconState from '../../public/img/icon-state.svg'
import iconChart from '../../public/img/icon-chart.svg'
import iconMoney from '../../public/img/icon-money.svg'
import {FC} from "react";
import {greyBackgroundColor} from "../../theme/theme";

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
    return (
        <Box mt={'100px'} pt={'50px'} pb={'50px'} bgcolor={greyBackgroundColor}>
            <Container maxWidth={'xl'}>
                <Typography variant={'h2'}>
                    Informacje o nas
                </Typography>
                <Typography component={'p'} variant={'subtitle1'}>
                    Przekonaj się, czym wyróżniamy się na tle konkurencji
                </Typography>

                <Stack alignItems={'center'}>
                    <Grid container spacing={'32px'} pt={'48px'} justifyContent={'center'} maxWidth={'900px'}>
                        <Grid item sm={12} md={6}>
                            <InfoCard icon={iconStar}
                                      iconAlt={'Certyfikat'}
                                      title={'Certyfikacja'}
                                      text={'Posiadamy Certyfikat Ministerstwa Finansów numer 8015/98'}/>
                        </Grid>
                        <Grid item sm={12} md={6}>
                            <InfoCard icon={iconMoney}
                                      iconAlt={'Ubezpieczenie'}
                                      title={'Pełne ubezpieczenie'}
                                      text={'Jako biuro rachunkowe ponosimy pełną odpowiedzialność, ' +
                                      'dlatego posiadamy ubezpieczenie od odpowiedzialności cywilnej.\n'}/>
                        </Grid>
                        <Grid item sm={12} md={6}>
                            <InfoCard icon={iconChart}
                                      iconAlt={'Komputer z wykresem'}
                                      title={'Najlepsze oprogramowanie'}
                                      text={'Korzystamy z systemu Comarch ERP Optima. Dzięki temu otrzymujesz ' +
                                      'między innymi zdalny dostęp do Twojej księgowości w każdej chwili.'}/>
                        </Grid>
                        <Grid item sm={12} md={6}>
                            <InfoCard icon={iconState}
                                      iconAlt={'Profesjonalizm'}
                                      title={'Udokumentowany profesjonalizm'}
                                      text={'Każdy z pracowników naszego biura posiada wieloletnie doświadczenie ' +
                                      'na stanowisku księgowym oraz wyższe wykształcenie.'}/>
                        </Grid>
                    </Grid>
                </Stack>
            </Container>
        </Box>
    )
}