import React from 'react';
import ReactMarkdown from 'react-markdown';
import {PageWrapper} from "../../hoc";
import {styles} from "../../constants/styles";
import fs from "fs";
import {StarsCanvas} from "../../components";
import {findAll, findArticleBySlug} from "../../reposiotry/ArticlesRepositpry";

const Post = ({data}) => {
    return (
        <div className="min-h-screen relative z-0">
            <section className={`${styles.padding} max-w-7xl mx-auto relative z-0`}>
                <div className="markdown z-10">
                    <ReactMarkdown>{data ?? ""}</ReactMarkdown>
                </div>
            </section>
            <StarsCanvas/>
        </div>
    );
}

export async function getStaticPaths() {
    const paths = findAll().map((article) => {
        return {params: {slug: article.slug}};
    });

    return {
        paths,
        fallback:false
    }
}

export async function getStaticProps({ params }) {
    const article = findArticleBySlug(params.slug);
    const data = fs.readFileSync(`${process.cwd()}/src/assets/blog/${params.slug}.md`).toString();

    return { props: {data: data, title: article.title}};
}

export default PageWrapper({title: 'Post', Child: Post});
