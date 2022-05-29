import Head from "next/head";
import {FC} from "react";

interface HtmlHeadProps {
    title: string
    description: string
}

export const HtmlHead: FC<HtmlHeadProps> = ({title, description}) => {
    return (
        <Head>
            <title>{title}</title>
            <meta name="description" content={description}/>
        </Head>
    )
}
