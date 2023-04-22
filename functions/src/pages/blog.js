import {PageWrapper}from "../hoc";
import {Posts} from "../components/blog";
import React, {useEffect, useState} from "react";
import {StarsCanvas} from "../components";
import {styles} from "../constants/styles";
import {motion} from "framer-motion";
import {textVariant} from "../utils/motion";
import {findAll} from "../reposiotry/ArticlesRepositpry";

const Blog = ({data}) => {
    return (
        <div className="min-h-screen relative z-0">
            <section className={`${styles.padding} max-w-7xl mx-auto relative z-0`}>
                <motion.div variants={textVariant()}>
                    <p className={`${styles.sectionSubText} text-center`}>
                        Про все та ні про що
                    </p>
                    <h2 className={`${styles.sectionHeadText} text-center`}>
                        Blog.
                    </h2>
                </motion.div>

                <Posts posts={data ?? []}/>
            </section>
            <StarsCanvas/>
        </div>
    );
};

export async function getStaticProps() {
    return { props: { data: findAll() } };
}

export default PageWrapper({fallback_title: 'Blog', Child: Blog});
