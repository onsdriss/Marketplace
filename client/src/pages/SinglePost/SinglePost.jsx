import "./single.css";
import SinglePost from "../../components/singlePost/SinglePost";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import Navbar2 from "../../components/Navbar2";
export default function Single() {
  return (
    <>
    <Navbar2/>
      <Navbar/>
    <div className="single">
      <SinglePost/>
    </div>
    <Footer/>
    </>
  );
}