import {join} from "path";
import fs from "fs";
import matter from "gray-matter";
import {serialize} from "next-mdx-remote/serialize";

export const getDates = async () => {
    const datesDir = join(process.cwd(), 'dates')
    const dates = await Promise.all(fs.readdirSync(datesDir).map(async d => {
        const datePath = join(datesDir, d)
        const fileContents = fs.readFileSync(datePath, 'utf8')
        const {data, content} = matter(fileContents)

        return {
            day: parseInt(d),
            content: await serialize(content)
        }
    }))

    return dates.sort((a, b) => a.day - b.day)
}
