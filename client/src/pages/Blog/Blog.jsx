import { useEffect, useState } from "react";
import Header from "../../components/header_posts/Header";
import Posts from "../../components/posts/Posts";
import styled from "styled-components";
import "./blog.css";
import axios from "axios";
import { useLocation } from "react-router";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import Navbar2 from "../../components/Navbar2";

export default function Home() {
  const [posts, setPosts] = useState([]);
  const { search } = useLocation();
  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("http://localhost:5000/api/posts" + search);
      setPosts(res.data);
    };
    fetchPosts();
  }, [search]);
  return (
    <>
    <Navbar2/>
    <Navbar/>
      <Header />
      <br/>
        <Posts posts={posts} /> 
        <Footer/>
    </>
  );
}