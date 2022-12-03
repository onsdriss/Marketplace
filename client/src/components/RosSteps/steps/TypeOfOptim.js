import { useStepperContext } from "../StepperContext";
import styled from "styled-components";
import "./styles.css";
import Dropdown from "./DropDown2";
import { useState } from "react";
const Input = styled.input`
  flex: 1;

  margin: 20px 10px 0px 0px;
  padding: 10px;
`;
export default function Details() {
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
      Please choose one of these optimization types
        </div>
        <Dropdown selected={selected} setSelected={setSelected} />
           
      </div>
    </div>
  );
}