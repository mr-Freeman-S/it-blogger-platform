import React from 'react';
import {useSelector} from "react-redux";
import {useAppSelector} from "../../app/hooks";
import Blog from "./Blog/Blog";

const BlogsList = () => {
    const state = useAppSelector(state => state.blogs.blogs);


    return (
        <div>
            <ul>
                {state.map(blog => <Blog img={blog.img} description={blog.description} title={blog.title} />)}
            </ul>
        </div>
    );
};

export default BlogsList;