import styled from "styled-components";
const UiComponents = () => {
  return (
    <>
      <Circle />
      <Circle2 />
    </>
  );
};

const Circle = styled.div`
  border-radius: 50%;
  height: 200px;
  width: 200px;
  background: linear-gradient(to right, #1888ff, #646FD4);
  position: absolute;
  top: 60%;
  left: 70%;
  z-index: 1;
`;
const Circle2 = styled(Circle)`
  height: 150px;
  width: 150px;
  top: -45%;
  left: -10%;
`;

export default UiComponents;