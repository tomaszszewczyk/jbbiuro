import {join} from "path";
import fs from "fs";
import matter from "gray-matter";
import {serialize} from "next-mdx-remote/serialize";

export const getNews = async (locale: string = 'pl') => {
    const newsDir = join(process.cwd(), 'news', locale)
    return await Promise.all(fs.readdirSync(newsDir).map(async d => {
        const datePath = join(newsDir, d)
        const fileContents = fs.readFileSync(datePath, 'utf8')
        const {data, content} = matter(fileContents)

        return {
            content: await serialize(content)
        }
    }))
}
