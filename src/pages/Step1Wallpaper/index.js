import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
// material-ui
import { Box } from "@mui/material";
import CONFIG from "configs/holiday";
import CustomImage from "customComponents/CustomImage";
import modalStlye from "customComponents/styles";
import { useNavigate } from "react-router";
import { downloadImage } from "utils/methods";

const { IMAGES, STEP_OPTIONS } = CONFIG;

const Step1Wallpaper = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { finished } = location.state || {};

  const [pressTimer, setPressTimer] = useState(null);
  const [isInit, setIsInit] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsInit(true);
    }, 100);
  }, []);

  const handleClickContinue = async () => {
    const newFinishedStep = { ...finished, [STEP_OPTIONS[1]]: true };
    navigate("/map#step1", { state: { finished: newFinishedStep } });
  };

  const handleClickClose = () => {
    navigate("/map#step1", { state: { finished } });
  };

  const handleDownload = async () => {
    downloadImage(IMAGES.STEP1_WALLPAPER, "holiday-wallpaper.png");
  };

  const handleLongPress = async () => {
    downloadImage(IMAGES.STEP1_WALLPAPER, "journey-to-the-peak");
  };

  const startPressTimer = () => {
    const timer = setTimeout(handleLongPress, 700); // 700ms for long press
    setPressTimer(timer);
  };
  const clearPressTimer = () => {
    if (pressTimer) {
      clearTimeout(pressTimer); // Clear the timer if the press ends early
      setPressTimer(null);
    }
  };

  return (
    <Box sx={modalStlye.wallpaperContentSx} className="map-page">
      <div className="bg-container">
        <CustomImage src={IMAGES.MAP_BG} alt="map" className="bg-img" />
      </div>

      <Box
        sx={modalStlye.modalContainerSx}
        className={isInit ? "fadeIn" : ""}
        onMouseDown={startPressTimer}
        onMouseUp={clearPressTimer}
        onTouchStart={startPressTimer}
        onTouchEnd={clearPressTimer}
      >
        <Box sx={modalStlye.modalWallpaperContentSx}>
          <CustomImage
            src={IMAGES.STEP1_WALLPAPER_CONTENT}
            alt="modal-content"
            className={`modal-content step1-wallpaper-content`}
          />
          <CustomImage
            src={IMAGES.STEP1_WALLPAPER}
            alt="modal-content"
            className="step1-wallpaper-img"
            onClick={handleDownload}
          />
          <CustomImage
            src={IMAGES.STEP1_WALLPAPER_BTN}
            alt="modal-btn"
            className={`modal-btn step1-wallpaper-btn`}
            onClick={handleClickContinue}
          />
        </Box>

        <Box onClick={handleClickClose}>
          <CustomImage
            src={IMAGES.CLOSE_BTN}
            alt="close-btn"
            sx={modalStlye.closeWallpaperBtnSx}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Step1Wallpaper;
