import {Box} from "@mui/system";
import {ButtonLink} from "./ButtonLink";
import {useTranslation} from "next-i18next";

export const SkipLink = () => {
    const {t} = useTranslation()

    return (
        <Box sx={{
            position: 'relative',
            'a': {
                position: 'fixed',
                left: '-100%',
                ':focus': {
                    left: '50px',
                    top: '200px'
                }
            }
        }}>
            <ButtonLink href={'#main'} tabIndex={0} variant={'contained'}>
                {t('Przejdź do treści')}
            </ButtonLink>
        </Box>
    )
}
