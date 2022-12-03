import { useStepperContext } from "../StepperContext";
import styled from "styled-components";
import "./styles.css"
const Input = styled.input`
  flex: 1;
  
  margin: 20px 10px 0px 0px;
  padding: 30px;
`;
export default function Details() {
  const { userData, setUserData } = useStepperContext();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };
  return (
    <div className="flex flex-col ">
      
      <div className="check"> 
          <Input 
              type="checkbox" 
              
              value={"battery"}
            />
            Battery
            <br/>
           
          <Input 
              type="checkbox" 
              required
              value={"batteryPlusFuelCell"}
           />
           Battery  and  FuelCell
      </div>
    </div>
  );
}