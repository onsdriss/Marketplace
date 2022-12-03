import LinearStepper from "../../components/RosSteps/steps/LinearStepper";
import { CssBaseline, Container, Paper, Box } from "@material-ui/core";
import Navbar from "../../components/navbar/Navbar";
import Navbar2 from "../../components/Navbar2";
function steps() {
  return (
    <>
    <Navbar2/>
      <Navbar/>
      <CssBaseline />
      <Container component={Box} p={4}>
        <Paper component={Box} p={3}>
          <LinearStepper />
        </Paper>
      </Container>
    </>
  );
}

export default steps;