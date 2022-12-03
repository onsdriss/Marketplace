import styled from "styled-components";
import { applications } from "../../data";
import { mobile } from "../../responsive";
import ApplicationItem from "./ApplicationItem";

const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
  ${mobile({ padding: "0px", flexDirection:"column" })}

`;
const Applications = () => {
  return (
    <Container>
    {applications.map((item) => (
      <ApplicationItem item={item} key={item.id} />
    ))}
    </Container>
  )
}

export default Applications