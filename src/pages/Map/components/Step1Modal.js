import { useNavigate } from "react-router";
// material-ui
import CONFIG from "configs/holiday";
import CustomModal from "customComponents/CustomModal";

const { IMAGES } = CONFIG;

const Step1Modal = ({ isShowModal, handleOnClose, finishedStep }) => {
  const navigate = useNavigate();

  const handleOnClickBegin = () => {
    navigate("/step1-wallpaper", { state: { finished: finishedStep } });
    handleOnClose();
  };

  const handleOnClickClose = () => {
    handleOnClose();
  };

  return (
    <>
      <CustomModal
        isShowModal={isShowModal}
        handleOnClick={handleOnClickBegin}
        contentSrc={IMAGES.STEP1_MODAL_CONTENT}
        btnSrc={IMAGES.STEP1_MODAL_BTN}
        onClose={handleOnClickClose}
      />
    </>
  );
};

export default Step1Modal;
