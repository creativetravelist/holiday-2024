import { useState } from "react";
// import PropTypes from 'prop-types';
import { Outlet } from "react-router-dom";

// material-ui
import { Box } from "@mui/material";
import Tools from "components/Tools";

// assets
import { Main } from "./styles";
// ==============================|| MAIN LAYOUT ||============================== //

const MainLayout = () => {
  const [isUserInteracted, setIsUserInteracted] = useState(false);
  const [playMusic, setPlayMusic] = useState(false);

  const handleClick = () => {
    //play audio
    setIsUserInteracted(true);
    if (!isUserInteracted) {
      setPlayMusic(true);
    }
  };

  return (
    <Box sx={{ display: "flex" }} onClick={handleClick}>
      {/* main content */}
      <Main>
        <Tools playMusic={playMusic} />
        <Outlet />
      </Main>
      {/* <Customization /> */}
    </Box>
  );
};

MainLayout.propTypes = {};

export default MainLayout;
