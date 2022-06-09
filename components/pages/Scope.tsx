import {Box, useTheme} from "@mui/system";
import {Container, Grid, Stack, Typography, useMediaQuery} from "@mui/material";
import {FC} from "react";
import {useTranslation} from "next-i18next";

interface ScopeCardProps {
    i: number
    title: string
    text: string
}

const ScopeCard: FC<ScopeCardProps> = ({i, title, text}) => {
    const theme = useTheme()
    const medium = useMediaQuery(theme.breakpoints.down('lg'))

    return (
        <>
            <Stack direction={medium ? 'column' : 'row'}
                   alignItems={medium ? 'flex-start' : 'flex-end'}
                   gap={'16px'}>
                <Typography component={'span'} sx={{
                    fontFamily: 'Josefin Sans',
                    fontWeight: '200',
                    fontSize: '120px',
                    lineHeight: '100px',
                    color: '#F95738',
                }}>{i}</Typography>
                <Typography variant={'h3'} pb={'8px'}>
                    {title}
                </Typography>
            </Stack>

            <Typography component={'p'} variant={'subtitle1'}>
                {text}
            </Typography>
        </>
    )
}

export const Scope = () => {
    const {t} = useTranslation()

    return (
        <Box pt={'100px'}>
            <Container maxWidth={'xl'}>
                <Typography variant={'h2'}>
                    {t("Zakres usług")}
                </Typography>
                <Typography component={'p'} variant={'subtitle1'}>
                    {t("Oferujemy pełny zakres usług księgowych, oraz kadrowo-płacowych")}
                </Typography>

                <Grid container spacing={'64px'} pt={'64px'} justifyContent={'center'}>
                    <Grid item sm={12} md={6}>
                        <ScopeCard i={1}
                                   title={t('Pełne Księgi Handlowe')}
                                   text={t('Oferujemy obsługę Ksiąg Handlowych dla Spółek oraz innych podmiotów')}
                        />
                    </Grid>

                    <Grid item sm={12} md={6}>
                        <ScopeCard i={2}
                                   title={t('Księgi Przychodów i Rozchodów')}
                                   text={t('Oferujemy księgowość  dla mniejszych podmiotów opodatkowanych podatkiem')}
                        />
                    </Grid>

                    <Grid item sm={12} md={6}>
                        <ScopeCard i={3}
                                   title={t('Ryczałt')}
                                   text={t('Oferujemy obsługę księgową dla ryczałtowców')}
                        />
                    </Grid>

                    <Grid item sm={12} md={6}>
                        <ScopeCard i={4}
                                   title={t('Ewidencja zakupów i sprzedaży')}
                                   text={t('Dla podatników podatku VAT prowadzimy ewidencję zakupów i sprzedaży.')}
                        />
                    </Grid>

                    <Grid item sm={12} md={6}>
                        <ScopeCard i={5}
                                   title={t('Ewidencja środków trwałych')}
                                   text={t('Oferujemy prowadzenie ewidencji')}
                        />
                    </Grid>

                    <Grid item sm={12} md={6}>
                        <ScopeCard i={6}
                                   title={t('Deklaracje podatkowe i sprawozdawcze')}
                                   text={t('Sporządzamy deklaracje PIT, CIT oraz inne wymagane deklaracje podatkowe.')}
                        />
                    </Grid>

                    <Grid item sm={12} md={6}>
                        <ScopeCard i={7}
                                   title={t('Sprawozdania finansowe')}
                                   text={t('Dla podatników prowadzących Księgi Handlowe sporządzamy sprawozdania finansowe')}
                        />
                    </Grid>

                    <Grid item sm={12} md={6}>
                        <ScopeCard i={8}
                                   title={t('VAT i JPK oraz Intrastat')}
                                   text={t('Sporządzamy miesięczne rozliczenia zaliczek na podatek, deklaracji VAT oraz pliki JPK')}
                        />
                    </Grid>

                    <Grid item sm={12} md={6}>
                        <ScopeCard i={9}
                                   title={t('Obsługa kadrowo-płacowa')}
                                   text={t('Oferujemy obsługę kadrowo-płacową w zakresie umów o pracę/dzieło/zlecenie')}
                        />
                    </Grid>

                    <Grid item sm={12} md={6}>
                        <ScopeCard i={10}
                                   title={t('Zaliczki i składki')}
                                   text={t('Sporządzamy wyliczenia zaliczek na podatek dochodowy od wynagrodzeń')}
                        />
                    </Grid>

                    <Grid item sm={12} md={6}>
                        <ScopeCard i={11}
                                   title={t('Reprezentacja przed US oraz ZUS')}
                                   text={t('W imieniu podatnika składamy deklaracje podatkowe, składkowe oraz inne.')}
                        />
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}
