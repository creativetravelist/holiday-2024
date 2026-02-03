import { useState } from "react";
import { useNavigate } from "react-router";

// material-ui
import { Box } from "@mui/material";
import CONFIG from "configs/holiday";
import CustomModal from "customComponents/CustomModal";
import modalStlye from "customComponents/styles";

import style from "../styles";

const { IMAGES } = CONFIG;

const Step2Modal = ({ isShowModal, handleOnClose, finishedStep }) => {
  const navigate = useNavigate();

  const [isBegin, setIsBegin] = useState(false);
  const [isShowCompleteModal, setIsShowCompleteModal] = useState(false);

  const handleOnClickBegin = () => {
    setIsBegin(true);
  };

  const handleOnCloseBegin = () => {
    handleOnClose();
    setIsBegin(false);
  };

  const handleOnCloseComplete = () => {
    handleOnClose();
    setIsBegin(false);
    setIsShowCompleteModal(false);
  };

  const handleOnClickTarget = () => {
    setIsShowCompleteModal(true);
  };

  const handleOnClickNext = () => {
    navigate("/step2-wallpaper", { state: { finished: finishedStep } });
    handleOnClose();
  };

  const bgSx = {
    background: `url(${IMAGES.STEP2_BG}) no-repeat center center`,
  };

  return (
    <>
      <Box
        sx={{ ...modalStlye.modalContainerSx, ...bgSx }}
        className={isShowModal ? "fadeIn" : ""}
      >
        <CustomModal
          isShowModal={!isBegin}
          handleOnClick={handleOnClickBegin}
          contentSrc={IMAGES.STEP2_BEGIN_MODAL_CONTENT}
          btnSrc={IMAGES.STEP2_BEGIN_MODAL_BTN}
          btnClass="begin-modal-btn"
          onClose={handleOnCloseBegin}
        />
        <CustomModal
          isShowModal={isShowCompleteModal}
          handleOnClick={handleOnClickNext}
          contentSrc={IMAGES.STEP2_COMPLETE_MODAL_CONTENT}
          btnSrc={IMAGES.STEP2_COMPLETE_MODAL_BTN}
          onClose={handleOnCloseComplete}
        />
        <Box sx={style.targetSx} onClick={handleOnClickTarget}></Box>
      </Box>
    </>
  );
};

export default Step2Modal;
