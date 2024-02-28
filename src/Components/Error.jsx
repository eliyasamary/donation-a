import Box from "@mui/material/Box";
import "../CSS/style.css";
import notFoundImg from "../assets/404.png";

const Error = () => {
  return (
    <Box className="flex-container-col-secondary">
      <h1 className="title-primary">Oops!</h1>
      <img src={notFoundImg} alt="404" className="not-found-img" />

      <h2 className="text-primary">
        Seems like you have taken a wrong turn ...
      </h2>
      <a href="/allItems" className="text-secondary">
        Click On Me to find your way back!
      </a>
    </Box>
  );
};

export default Error;
