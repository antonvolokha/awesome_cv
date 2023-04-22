import {motion} from "framer-motion";
import {fadeIn} from "../../utils/motion";
import React from "react";

const PostCard = ({index, title, date, slug}) => (
    <a className='xs w-full' href={`/blog/${slug}`}>
        <motion.div
            variants={fadeIn("right", "spring", index * 0.5, 0.75)}
            className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
        >
            <div
                className='bg-tertiary rounded-[20px] py-2 px-6 flex flex-row'
            >
                <h4 className='text-white text-[20px] font-bold justify-start mr-auto'>
                    {title}
                </h4>
                <h4 className='text-white text-[20px] font-bold text-right'>
                    {date}
                </h4>
            </div>
        </motion.div>
    </a>
);

export default PostCard;