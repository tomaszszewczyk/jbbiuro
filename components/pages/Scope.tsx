import {Box, useTheme} from "@mui/system";
import {Container, Grid, Stack, Typography, useMediaQuery} from "@mui/material";
import {FC} from "react";

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
    return (
        <Box pt={'100px'}>
            <Container maxWidth={'xl'}>
                <Typography variant={'h2'}>
                    Zakres usług
                </Typography>
                <Typography component={'p'} variant={'subtitle1'}>
                    Oferujemy pełny zakres usług księgowych, oraz kadrowo-płacowych m.in.:
                </Typography>

                <Grid container spacing={'64px'} pt={'64px'} justifyContent={'center'}>
                    <Grid item sm={12} md={6}>
                        <ScopeCard i={1}
                                   title={'Pełne Ksiągi Handlowe'}
                                   text={'Oferujemy obsługę Ksiąg Handlowych dla Spółek oraz innych podmiotów ' +
                                   'zobowiązanych do pełnej księgowości zgodnie z Ustawą o Rachunkowości.'}
                        />
                    </Grid>

                    <Grid item sm={12} md={6}>
                        <ScopeCard i={2}
                                   title={'Księgi Przychodów i Rozchodów'}
                                   text={'Oferujemy księgowość  dla mniejszych podmiotów opodatkowanych podatkiem ' +
                                   'PIT  na zasadach ogólnych lub podatkiem liniowym.'}
                        />
                    </Grid>

                    <Grid item sm={12} md={6}>
                        <ScopeCard i={3}
                                   title={'Ryczałt'}
                                   text={'Oferujemy obsługę księgową dla ryczałtowców, ' +
                                   'opodatkowujących ryczałtowo przychody.'}
                        />
                    </Grid>

                    <Grid item sm={12} md={6}>
                        <ScopeCard i={4}
                                   title={'Ewidencja zakupów i sprzedaży'}
                                   text={'Dla podatników podatku VAT prowadzimy ewidencję zakupów i sprzedaży.'}
                        />
                    </Grid>

                    <Grid item sm={12} md={6}>
                        <ScopeCard i={5}
                                   title={'Ewidencja środków trwałych'}
                                   text={'Oferujemy prowadzenie ewidencji środków trwałych oraz wartości niematerialnych i prawnych.'}
                        />
                    </Grid>

                    <Grid item sm={12} md={6}>
                        <ScopeCard i={6}
                                   title={'Deklaracje podatkowe i sprawozdawcze'}
                                   text={'Sporządzamy deklaracje PIT, CIT oraz inne wymagane deklaracje podatkowe.'}
                        />
                    </Grid>

                    <Grid item sm={12} md={6}>
                        <ScopeCard i={7}
                                   title={'Sprawozdania finansowe'}
                                   text={'Dla podatników prowadzących Księgi Handlowe sporządzamy sprawozdania finansowe ' +
                                   'obejmujące bilans, rachunek zysków i strat, sprawozdanie z przepływów pieniężnych ' +
                                   'oraz zestawienie zmian w kapitałach własnych'}
                        />
                    </Grid>

                    <Grid item sm={12} md={6}>
                        <ScopeCard i={8}
                                   title={'VAT i JPK oraz Intrastat'}
                                   text={'Sporządzamy miesięczne rozliczenia zaliczek na podatek, deklaracji VAT oraz pliki JPK'}
                        />
                    </Grid>

                    <Grid item sm={12} md={6}>
                        <ScopeCard i={9}
                                   title={'Obsługa kadrowo-płacowa'}
                                   text={'Oferujemy obsługę kadrowo-płacową w zakresie umów o pracę/dzieło/zlecenie, ' +
                                   'sporządzania list płac. Sporządzamy listy płac, deklaracje ZUS, PFRON.'}
                        />
                    </Grid>

                    <Grid item sm={12} md={6}>
                        <ScopeCard i={10}
                                   title={'Zaliczki i składki'}
                                   text={'Sporządzamy wyliczenia zaliczek na podatek dochodowy od wynagrodzeń, ' +
                                   'rozliczamy składki ZUS oraz Pracownicze Plany Kapitałowe'}
                        />
                    </Grid>

                    <Grid item sm={12} md={6}>
                        <ScopeCard i={11}
                                   title={'Reprezentacja przed US oraz ZUS\n'}
                                   text={'W imieniu podatnika składamy deklaracje podatkowe, składkowe oraz inne. ' +
                                   'Reprezentujemy Podatnika w trakcie kontroli podatkowych i ZUS-owskich.'}
                        />
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}