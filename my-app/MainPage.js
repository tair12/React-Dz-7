import React, {useEffect, useState}from 'react';
import header from "./Header";
import footer from "./Footer";
import Header from "./Header";
import Footer from "./Footer";

function MainPage(props) {
    const [post, setPosts]  - useState([]);
    useEffect (()=> {
        fetch("http://jsonplaceholder.typicode.com/posts")
            .then(response => response.json())
            .then(data => setPosts (data))
    }, [])
    return (
        <div>
            <Header/>
            <ul>
                {post.map(post => <li key = {post.id}> {post.title}.slice (0,10)</li>)}
            </ul>
            < Footer/>
        </div>
    );
}

export default MainPage;