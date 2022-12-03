import { useStepperContext } from "../StepperContext";
import "./styles.css";
import Dropdown from "./Dropdown";
import { useState } from "react";

export default function Account() {
  const { userData, setUserData } = useStepperContext();
  const [selected, setSelected] = useState("Choose One");
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  return (
    <div className="flex flex-col ">
      <div className="mx-2 w-full flex-1">
        <div className="mt-3 h-6 text-xs font-bold uppercase leading-8 text-gray-500">
          Choose your battery Application
        </div>
        <div class="radio-group">
              <div class='radio' data-value="credit"><img src="https://media.istockphoto.com/photos/modern-passenger-bus-picture-id628452510?k=6&m=628452510&s=170667a&w=0&h=eoyQjkEfbHDJ3jX04ZLr30JLDPn7C2Ui_Rc7uPiBdjs=" width="300px" height="300px" className="application_img" /></div>
              <div class='radio' data-value="paypal"><img src="https://pluspng.com/img-png/fast-car-png-black-and-white-fast-speed-white-lights-tires-free-png-image-and-clipart-650.jpg" width="300px" height="300px" className="application_img"/></div>
              <div class='radio' data-value="paypal"><img src="https://th.bing.com/th/id/OIP.nVtSFH7snofcRImnytmfQAHaEy?pid=ImgDet&rs=1" width="300px" height="300px" className="application_img"/></div>
              <br/>
              <div class='radio' data-value="paypal"><img src="https://th.bing.com/th/id/OIP.xkuP-MNUoD0VFPg4VlmgpgHaFj?pid=ImgDet&rs=1" width="300px" height="300px" className="application_img"/></div>
              <div class='radio' data-value="paypal"><img src="https://media.istockphoto.com/photos/model-of-an-airplane-on-a-white-background-picture-id178174696?k=6&m=178174696&s=612x612&w=0&h=ZxOiCYYal6_Jm7QzrwhnF8FumsXDvS09i1wof2k72q0=" width="300px" height="300px" className="application_img"/></div>
              <div class='radio' data-value="paypal"><img src="https://d3fa68hw0m2vcc.cloudfront.net/f4e/152055001.jpeg"  width="300px" height="300px" className="application_img"/></div>
              
              <Dropdown selected={selected} setSelected={setSelected} />
        </div>
      </div>
      
           
            
    </div>
  );
}