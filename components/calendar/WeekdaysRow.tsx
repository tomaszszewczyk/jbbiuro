import {Stack, Typography} from "@mui/material";
import {days} from "./logic";
import {useTranslation} from "next-i18next";

export const WeekdaysRow = () => {
    const {t} = useTranslation()

    return (
        <Stack direction={'row'} justifyContent={'space-around'}>
            {days.map((d, i) => (
                <Typography key={i} sx={{fontWeight: '500'}}>
                    {t(d)}
                </Typography>
            ))}
        </Stack>
    )
}
