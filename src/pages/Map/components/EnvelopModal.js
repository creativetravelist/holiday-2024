import { useNavigate } from "react-router";
// material-ui
import { Box } from "@mui/material";
import CONFIG from "configs/holiday";
import CustomModal from "customComponents/CustomModal";

import modalStlye from "customComponents/styles";

const { IMAGES } = CONFIG;

const EnvelopModal = ({ isShowModal, handleOnClose }) => {
  const navigate = useNavigate();

  const handleOnClickChooseCard = () => {
    navigate("/signing");
  };

  const handleOnCloseEnvelope = () => {
    handleOnClose();
  };

  return (
    <>
      <Box
        sx={modalStlye.modalContainerSx}
        className={isShowModal ? "fadeIn" : ""}
      >
        <CustomModal
          isShowModal={isShowModal}
          handleOnClick={handleOnClickChooseCard}
          contentSrc={IMAGES.ENVELOPE}
          btnSrc={IMAGES.ENVELOPE_BTN}
          btnClass="envelope-btn"
          onClose={handleOnCloseEnvelope}
        />
      </Box>
    </>
  );
};

export default EnvelopModal;
