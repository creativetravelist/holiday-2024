import { useState } from "react";
import { useNavigate } from "react-router";
// material-ui
import { Box } from "@mui/material";
import CONFIG from "configs/holiday";
import CustomImage from "customComponents/CustomImage";
import modalStlye from "customComponents/styles";

import style from "./styles";

const { IMAGES } = CONFIG;

const OpeningPage = () => {
  const navigate = useNavigate();
  const [isShowModal, setIsShowModal] = useState(false);

  const handleOnClickOpenPopup = () => {
    setIsShowModal(true);
  };
  const handleOnClickBegin = () => {
    setIsShowModal(false);
    navigate("/map");
  };

  return (
    <Box sx={style.contentSx} className="opening-page">
      <Box
        sx={modalStlye.modalContainerSx}
        className={isShowModal ? "fadeIn" : ""}
      >
        <Box sx={style.modalContentSx}>
          <div className="opening-rules-title" />
          <Box sx={style.sectionsContainerSx}>
            <CustomImage
              src={IMAGES.OPENING_POPUP}
              alt="rules"
              className="opening-sections"
            />
          </Box>
          <CustomImage
            src={IMAGES.OPENING_POPUP_BTN}
            alt="rules-btn"
            className="opening-rules-btn"
            onClick={handleOnClickBegin}
          />
        </Box>
      </Box>
      <CustomImage
        src={IMAGES.OPENING_TITLE}
        alt="opening-title"
        className="opening-title"
      />
      <Box sx={style.sparkleTopContainerSx}>
        <CustomImage
          src={IMAGES.OPENING_SPARKLE_TOP}
          alt="sparkle-top"
          className="sparkle-top"
        />
      </Box>
      <Box sx={style.sparkleBottomContainerSx}>
        <CustomImage
          src={IMAGES.OPENING_SPARKLE_BOTTOM}
          alt="sparkle-top"
          className="sparkle-bottom"
        />
      </Box>
      <Box sx={style.footerBtnSx} onClick={handleOnClickOpenPopup}>
        <CustomImage src={IMAGES.OPENING_BTN} alt="opening-btn" />
      </Box>
    </Box>
  );
};

export default OpeningPage;
