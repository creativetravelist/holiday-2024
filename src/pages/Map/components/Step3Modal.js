import { useNavigate } from "react-router";
// material-ui
import { Box } from "@mui/material";
import CONFIG from "configs/holiday";
import CustomModal from "customComponents/CustomModal";
import modalStlye from "customComponents/styles";

const { IMAGES, STEP_OPTIONS } = CONFIG;

const Step3Modal = ({ isShowModal, handleOnClose, finishedStep }) => {
  const navigate = useNavigate();

  const handleOnClickNext = () => {
    const newFinishedStep = { ...finishedStep, [STEP_OPTIONS[3]]: true };
    navigate("/map", { state: { finished: newFinishedStep } });

    handleOnClose();
  };

  const handleOnClickClose = () => {
    handleOnClose();
  };

  return (
    <Box
      sx={modalStlye.modalContainerSx}
      className={isShowModal ? "fadeIn" : ""}
    >
      <CustomModal
        isShowModal={isShowModal}
        handleOnClick={handleOnClickNext}
        contentSrc={IMAGES.STEP3_MODAL_CONTENT}
        btnSrc={IMAGES.STEP3_MODAL_BTN}
        onClose={handleOnClickClose}
      />
    </Box>
  );
};

export default Step3Modal;
