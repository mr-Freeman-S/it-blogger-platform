import React from 'react';
import style from "./Blog.module.css"
import {ReactComponent as Img} from "./../../../assets/icons/img.svg"

type BlogPropsType = {
    img?: string
    title: string
    description: string
}

const Blog = ({img, title, description}: BlogPropsType) => {
    return (
        <div className={style.wrapper}>
            <div className={style.imgWrapper}>{img || <Img className={style.img}/>}</div>
            <div className={style.content}>
                <h4 className={style.title}>{title}</h4>
                <div className={style.description}>{description}</div>
            </div>
        </div>
    );
};

export default Blog;