import Navbar from "./components/NavBar/navbar";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Intro from './components/intro/intro';
import Works from "./components/Works/works";
import Skills from "./components/Skills/skills"
import Contact from "./components/Contact/contact";
import Gallery from "./components/Gallery/gallery";
import Blog from "./Blog/client/blog";
import Post from "./Blog/client/post";
import Header from "./Blog/client/header";
import IndexPage from "./Blog/client/pages/indexpage";
import LoginPage from "./Blog/client/pages/loginpage";
import RegisterPage from "./Blog/client/pages/registerpage";
import Layout from "./Blog/client/layout";
import CreatePost from "./Blog/client/pages/createpost";
import PostPage from "./Blog/client/pages/PostPage";


function App() {
  return (
    <Router>
    <Navbar /> 
  
    <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/portfolio" element={<Works />} />
        <Route path="/about" element={<Skills/>} />
        <Route path="/client" element={<Contact />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/blog" element={<Blog/>}/>
      
            <Route path ="/blog" element ={<Layout/>}>
              <Route index element = {<IndexPage />} />
              <Route path={'/blog/login'} element={<LoginPage />} />
              <Route path ={'/blog/register'} element ={<RegisterPage/>}/> 
              <Route path = {"/blog/create"} element = {<CreatePost/>} />
              <Route path="/blog/post/:id" element={<PostPage />} />

              
            </Route>
    </Routes>
  
  </Router>
  )
 }

export default App;
