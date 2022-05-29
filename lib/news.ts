import {join} from "path";
import fs from "fs";
import matter from "gray-matter";
import {serialize} from "next-mdx-remote/serialize";

export const getNews = async () => {
    const datesDir = join(process.cwd(), 'news')
    return await Promise.all(fs.readdirSync(datesDir).map(async d => {
        const datePath = join(datesDir, d)
        const fileContents = fs.readFileSync(datePath, 'utf8')
        const {data, content} = matter(fileContents)

        return {
            content: await serialize(content)
        }
    }))
}
