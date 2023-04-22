import React from "react";
import {PostCard} from "./index";

const Posts = ({posts}) => {
    return (
        <div className='mt-20 flex flex-wrap gap-10'>
            {posts.map((post, index) => (
                <PostCard key={post.title} index={index} {...post} />
            ))}
        </div>
    );
};

export default Posts;

