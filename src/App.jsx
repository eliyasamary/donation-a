import { Outlet } from "react-router-dom";
import "./App.css";
import Box from "@mui/material/Box";
import Header from "./Components/HeaderComponent.jsx";
import Navigation from "./Components/NavComponent.jsx";

const App = () => {
  return (
    <Box className="root">
      <Header></Header>
      <Navigation></Navigation>
      <Outlet />
    </Box>
  );
};

export default App;
