import {Box} from "@mui/system";
import {greyBackgroundColor} from "../../theme/theme";
import {Card, Container, Stack, Typography} from "@mui/material";
import {FC, ReactNode} from "react";
import {MDXRemote, MDXRemoteSerializeResult} from "next-mdx-remote";

export interface BlogEntry {
    content: MDXRemoteSerializeResult
}

interface ParentProps {
    children: ReactNode
}

const h1: FC<ParentProps> = ({children}) =>
    <Typography variant={'h3'} component={'h2'}>{children}</Typography>

const p: FC<ParentProps> = ({children}) =>
    <Typography variant={'body2'} component={'p'}>{children}</Typography>

const strong: FC<ParentProps> = ({children}) =>
    <strong style={{color: '#2C1F9C'}}>{children}</strong>

const li: FC<ParentProps> = ({children}) =>
    <Typography variant={'body2'} component={'li'}>{children}</Typography>

export const BlogCard: FC<BlogEntry> = ({content}) => {
    return (
        <Card sx={{maxWidth: '900px', width: '100%'}}>
            <Stack gap={'16px'} m={'32px'}>
                {/*@ts-ignore*/}
                <MDXRemote {...content} components={{p, li, strong, h1}}/>
            </Stack>
        </Card>
    )
}

interface BlogProps {
    blogs: BlogEntry[]
}

export const Blog: FC<BlogProps> = ({blogs}) => {
    return (
        <Box bgcolor={greyBackgroundColor} mt={'100px'} pt={'50px'} pb={'50px'}>
            <Container maxWidth={'xl'}>
                <Stack gap={'16px'} pt={'32px'} alignItems={'center'}>
                    {blogs.map((d, i) => (
                        <BlogCard key={i} content={d.content}/>
                    ))}
                </Stack>
            </Container>
        </Box>
    )
}
