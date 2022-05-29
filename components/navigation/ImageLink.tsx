import {FC} from "react";
import Link from "next/link";
import {Button} from "@mui/material";
import Image from "next/image";
import {Box} from "@mui/system";

interface ImageLink {
    src: any
    url: string
    alt: string
    tabIndex?: number
    width?: string
    height?: string
    label?: string
}

export const ImageLink: FC<ImageLink> = (props) => {
    const {src, alt, url, tabIndex = 0, width, height, label} = props

    return (
        <Link href={url} passHref>
            <Button aria-label={label} component={'a'} tabIndex={tabIndex}>
                <Image src={src} alt={alt}/>
            </Button>
        </Link>
    )
}
