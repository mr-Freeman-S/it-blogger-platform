import React from 'react';
import {useDispatch} from "react-redux";
import {increment} from "../../blogsSlice";
import {useAppDispatch} from "../../../app/hooks";

type BlogPropsType = {
    img: string
    title: string
    description: string
}

const Blog = ({img, title, description}: BlogPropsType) => {
    const dispatch = useAppDispatch()
    return (
        <div>
            <div>{img}</div>
            <div>{title}</div>
            <div>{description}</div>
            <button  onClick={()=> dispatch(increment())}>+</button>
        </div>
    );
};

export default Blog;