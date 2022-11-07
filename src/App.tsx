import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "./app/store";
import Header from "./features/header/Header";
import './App.css'
import {Route, Routes} from "react-router-dom";
import BlogsList from "./features/blogsList/BlogsList";
import PostsList from "./features/postsList/PostsList";
import NoMatch from "./features/noMatch/NoMatch";
import Navbar from "./features/navbar/Navbar";
import Main from "./pages/main/Main";

const App = () => {
    const count = useSelector((state: RootState) => state.counter.value)
    const dispatch = useDispatch()
    return (
        <div>
            <Header/>
            <Main/>
        </div>
    )
};

export default App;