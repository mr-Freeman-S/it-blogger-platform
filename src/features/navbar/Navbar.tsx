import React from 'react';
import style from './Navbar.module.css'
import {Link, Route, Routes} from "react-router-dom";
import {ReactComponent as Blogs} from "./../../assets/icons/blogs.svg"


const Navbar = () => {
    return (
        <div className={style.wrapper}>

                <Link className={style.link} to='/Blogs'>
                    <Blogs className={style.blogsImg}/>
                    Blogs
                </Link>

            <Link className={style.link} to='/Posts'>
                posts
            </Link>
        </div>
    );
};

export default Navbar;