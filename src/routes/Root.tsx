import { Outlet } from "react-router-dom";
import Navbar from "../common/components/navbar/Navbar";
import Container from "../common/components/container/Container";

function Root() {
  return (
    <div className="h-full">
      <Navbar />
      <Container>
        <Outlet />
      </Container>
    </div>
  );
}

export default Root;
