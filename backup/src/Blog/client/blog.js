import './blog.css';
import Post from './post';
import Header from './header';
import Layout from './layout';
import {Route, Routes } from 'react-router-dom';

function Blog() {
    return(
        <Routes>
            <Route path ="/blog" element ={<Layout/>}>
                <Route index element = {
                    <Post/>
                } />
            <Route path={'/blog/login'} element={
                 <div>login page</div>
            } />
            </Route>
        </Routes>
    );
}

export default Blog;