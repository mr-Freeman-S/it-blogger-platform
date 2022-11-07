import React from 'react';
import Navbar from "../../features/navbar/Navbar";
import {Route, Routes} from "react-router-dom";
import BlogsList from "../../features/blogsList/BlogsList";
import PostsList from "../../features/postsList/PostsList";
import NoMatch from "../../features/noMatch/NoMatch";
import style from "./Main.module.css"

const Main = () => {
    return (
        <div className={style.wrapper}>
            <Navbar/>
            <Routes>
                <Route path="/" element={<BlogsList/>}/>

                <Route path="/Blogs" element={<BlogsList/>}/>
                <Route path="/Posts" element={<PostsList/>}/>
                {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
                <Route path="*" element={<NoMatch/>}/>
            </Routes>
        </div>
    );
};

export default Main;