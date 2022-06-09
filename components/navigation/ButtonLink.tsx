import {FC, ReactNode} from "react";
import Link from "next/link";
import {Button} from "@mui/material";

export interface ButtonLinkProps {
    href: string
    children: ReactNode
    tabIndex?: number
    variant?: 'text' | 'outlined' | 'contained'
    label?: string
}

export const ButtonLink: FC<ButtonLinkProps> = (props) => {
    const {href, children, tabIndex = 0, variant, label} = props

    return (
        <Link href={href} passHref>
            <Button aria-label={label} component={'a'} tabIndex={tabIndex} variant={variant}
                    sx={{':first-letter': {textTransform: "capitalize"}}}>{children}</Button>
        </Link>
    )
}
