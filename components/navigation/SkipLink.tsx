import {Box} from "@mui/system";
import {ButtonLink} from "./ButtonLink";

export const SkipLink = () => {
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
                {'Przejdź do treści'}
            </ButtonLink>
        </Box>
    )
}
