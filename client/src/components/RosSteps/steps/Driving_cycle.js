import { useStepperContext } from "../StepperContext";
import "./styles.css";
import Dropdown3 from "./Dropdown3";
import { useState } from "react";
export default function Payment() {
  const { userData, setUserData } = useStepperContext();
  const [selected, setSelected] = useState("Choose One");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };
  return (
    <div className="flex flex-col ">
      <div className="w-full mx-2 flex-1">
        <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase coll">
          Please choose one of these Driving Cycles
        </div>
        
         <Dropdown3 selected={selected} setSelected={setSelected} />
         
      </div>
    </div>
  );
}