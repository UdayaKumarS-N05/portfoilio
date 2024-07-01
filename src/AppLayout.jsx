import { Outlet } from "react-router-dom";
import Nav from "./pages/Nav";
function AppLayout() {
  return (
    <div>
      <Nav></Nav>
      <main>
        <Outlet></Outlet>
      </main>
    </div>
  );
}

export default AppLayout;
