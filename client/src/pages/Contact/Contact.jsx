import React from 'react';
import Footer from "../../components/Footer/Footer";
import styled from "styled-components";
import emailjs from 'emailjs-com'
import { useState ,useRef} from 'react';
import './contact.css'
import Navbar from "../../components/navbar/Navbar";
import Navbar2 from "../../components/Navbar2";

const Alert = styled.p`
  position: relative;
  padding: 0.4rem;
  margin: 0.5rem;
  color: white;
  text-align: center;
  font-size: 1.2rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 10px;
  background: rgba(0, 94, 255, 0.1);
  backdrop-filter: blur(10px);
  z-index: 3;
`;
export default function Contact() {
  const form = useRef();
  const sendEmail=(e)=>{
    e.preventDefault();
  
    emailjs.sendForm('service_1okm3zx','template_z0h8btm',form.current, 'lxCh0avzDn5Hh5T9F'
    ).then(res=>{
      console.log(res.text);
      console.log("message sent");
    }).catch(err=>console.log(err));

    setName("");
    setEmail("");
    setMessage("");
      setMessage2("Message sent !!!")
      setTimeout(()=> {
        setMessage2("");
      },3000)
  }
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [message2, setMessage2] = useState('');
  return (
    <>
  <Navbar2/>
    <Navbar/>
    <div class="contact3 py-5">
  <div class="row no-gutters">
    <div class="container">
      <div class="row">
        <div class="col-lg-6">
          <div class="card-shadow">
            <img src="https://www.a-storm.com/tl_files/Bilder/Produktseite/Antrieb-Triebwage-powerpack.jpg" class="img-fluid"/>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="contact-box ml-3">
            <h1 class="font-weight-light mt-2"> Contact us</h1>
            <form class="mt-4" ref={form} onSubmit={sendEmail}>
              <div class="row">
                <div class="col-lg-12">
                  <div class="form-group mt-2">
                    <input
                      type="text"
                      className='form-control'
                      id="name"
                      name="name"
                      placeholder="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                </div>
                <div class="col-lg-12">
                  <div class="form-group mt-2">
                    <input
                      type="email"
                      className='form-control'
                      id="email"
                      name="email"
                      placeholder="email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>
                <div class="col-lg-12">
                  <div class="form-group mt-2">
                    <textarea
                      type="text"
                      className='form-control'
                      id="message"
                      name="message"
                      placeholder="message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                    />
                  </div>
                </div>
                <div class="col-lg-12">
                  <button type="submit" class="btn btn-danger-gradiant mt-3 text-white border-0 px-3 py-2"><span> SUBMIT</span></button>
                </div>
              </div>
            </form>
            {message2 && <Alert>{message2}</Alert>}
          </div>
        </div>
        <div class="col-lg-12">
          <div class="card mt-4 border-0 mb-4">
            <div class="row">
              <div class="col-lg-4 col-md-4">
                <div class="card-body d-flex align-items-center c-detail pl-0">
                  <div class="mr-3 align-self-center">
                    {/*<img src="https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/contact/icon1.png"/>*/}
                  </div>
                  <div class="">
                    <h6 class="font-weight-medium">Address</h6>
                    <p class="">601 Sherwood Ave.
                      <br/> San Bernandino</p>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-md-4">
                <div class="card-body d-flex align-items-center c-detail">
                  <div class="mr-3 align-self-center">
                   {/* <img src="https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/contact/icon2.png"/>*/}
                  </div>
                  <div class="">
                    <h6 class="font-weight-medium">Phone</h6>
                    <p class="">251 546 9442
                      <br/> 630 446 8851</p>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-md-4">
                <div class="card-body d-flex align-items-center c-detail">
                  <div class="mr-3 align-self-center">
                    {/*<img src="https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/contact/icon3.png"/>*/}
                  </div>
                  <div class="">
                    <h6 class="font-weight-medium">Email</h6>
                    <p class="">
                      info@wrappixel.com
                      <br/> 123@wrappixel.com
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
      <Footer/>
      
    </>
  );
}