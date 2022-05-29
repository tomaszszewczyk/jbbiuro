import {Stack, Typography} from "@mui/material";
import {days} from "./logic";

export const WeekdaysRow = () => {
    return (
        <Stack direction={'row'} justifyContent={'space-around'}>
            {days.map((d, i) => (
                <Typography key={i} sx={{fontWeight: '500'}}>
                    {d}
                </Typography>
            ))}
        </Stack>
    )
}
