import fs from "fs";

const ARTICLES_DIR = `${process.cwd()}/src/assets/blog/`;

const getFileNameWithoutExtension = (filePath) => {
    return filePath.split('.').slice(0, -1).join('.');
}

const readFirstLineSync = (filePath) => {
    const buffer = Buffer.alloc(256);
    const file = fs.openSync(filePath, 'r');
    const bytesRead = fs.readSync(file, buffer, 0, buffer.length, 0);

    fs.closeSync(file);

    const data = buffer.toString('utf8', 0, bytesRead);

    return data.split('\n')[0];
}

export const findAll = () => {
    return fs.readdirSync(ARTICLES_DIR).filter((file) => {
        return file.includes('.md');
    }).map((file) => {
        const fullPath = `${ARTICLES_DIR}${file}`;
        const stat = fs.statSync(fullPath);

        return {
            name: file,
            fullPath: fullPath,
            ctimeMs: stat.ctimeMs,
            date: stat.ctime.toLocaleDateString('uk-UA', { month: 'long', day: 'numeric', year: 'numeric' }),
            slug: getFileNameWithoutExtension(file),
            title: readFirstLineSync(fullPath).slice(2),
        };
    }).sort((a, b) => {
        return b.ctimeMs - a.ctimeMs;
    });
}

export const findArticleBySlug = (slug) => {
    for (const article of findAll()) {
        if (article.slug === slug) {
            return article;
        }
    }
}
